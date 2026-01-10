/*
  # Fix Security Issues
  
  ## Changes Made:
  
  ### 1. Remove Unused Indexes
  - Drop `idx_formations_slug` (not being used by queries)
  - Drop `idx_formations_category` (not being used by queries)
  - Drop `idx_formations_available` (not being used by queries)
  
  ### 2. Fix Overly Permissive RLS Policies on `formations`
  
  **Problem:** Current policies allow ANY authenticated user to insert, update, or delete ANY formation.
  
  **Solution:** 
  - Add `created_by` column to track ownership
  - Restrict INSERT to add the creator's ID automatically
  - Restrict UPDATE to only the creator or admins
  - Restrict DELETE to only the creator or admins
  - Add admin role check via app_metadata
  
  ### 3. Improve RLS Policy on `guide_downloads`
  
  **Problem:** INSERT policy allows unrestricted anonymous access without validation.
  
  **Solution:**
  - Add email format validation constraint
  - Keep INSERT open for anonymous users (required for public forms)
  - Add constraint to prevent empty emails
  
  ### 4. Auth DB Connection Strategy
  
  **Note:** This cannot be fixed via SQL migration. 
  Must be configured in Supabase Dashboard → Settings → Database → Connection Pooling.
  Change from fixed number (10) to percentage-based allocation.
*/

-- ============================================
-- 1. DROP UNUSED INDEXES
-- ============================================

DROP INDEX IF EXISTS idx_formations_slug;
DROP INDEX IF EXISTS idx_formations_category;
DROP INDEX IF EXISTS idx_formations_available;

-- ============================================
-- 2. ADD CREATED_BY COLUMN TO FORMATIONS
-- ============================================

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'formations' AND column_name = 'created_by'
  ) THEN
    ALTER TABLE formations ADD COLUMN created_by uuid REFERENCES auth.users(id);
  END IF;
END $$;

-- ============================================
-- 3. DROP OLD PERMISSIVE RLS POLICIES
-- ============================================

DROP POLICY IF EXISTS "Authenticated users can insert formations" ON formations;
DROP POLICY IF EXISTS "Authenticated users can update formations" ON formations;
DROP POLICY IF EXISTS "Authenticated users can delete formations" ON formations;
DROP POLICY IF EXISTS "Anyone can record guide downloads" ON guide_downloads;

-- ============================================
-- 4. CREATE SECURE RLS POLICIES FOR FORMATIONS
-- ============================================

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN COALESCE(
    (SELECT (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'),
    false
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- INSERT: Set created_by automatically to current user
CREATE POLICY "Authenticated users can insert their own formations"
  ON formations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

-- UPDATE: Only creator or admin can update
CREATE POLICY "Users can update own formations or admins can update any"
  ON formations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by OR is_admin())
  WITH CHECK (auth.uid() = created_by OR is_admin());

-- DELETE: Only creator or admin can delete
CREATE POLICY "Users can delete own formations or admins can delete any"
  ON formations
  FOR DELETE
  TO authenticated
  USING (auth.uid() = created_by OR is_admin());

-- ============================================
-- 5. ADD EMAIL VALIDATION FOR GUIDE_DOWNLOADS
-- ============================================

-- Add constraint to ensure email is not empty and has @ symbol
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'guide_downloads_email_format'
  ) THEN
    ALTER TABLE guide_downloads 
    ADD CONSTRAINT guide_downloads_email_format 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
  END IF;
END $$;

-- Add constraint to ensure guide_name is not empty
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'guide_downloads_guide_name_not_empty'
  ) THEN
    ALTER TABLE guide_downloads 
    ADD CONSTRAINT guide_downloads_guide_name_not_empty 
    CHECK (length(trim(guide_name)) > 0);
  END IF;
END $$;

-- Recreate INSERT policy with validation (constraints will enforce data quality)
CREATE POLICY "Anonymous users can record guide downloads with valid data"
  ON guide_downloads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(email)) > 0 
    AND length(trim(guide_name)) > 0
  );

-- ============================================
-- 6. CREATE TRIGGER TO AUTO-SET created_by
-- ============================================

CREATE OR REPLACE FUNCTION set_created_by()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_by = auth.uid();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS set_formations_created_by ON formations;

CREATE TRIGGER set_formations_created_by
  BEFORE INSERT ON formations
  FOR EACH ROW
  EXECUTE FUNCTION set_created_by();