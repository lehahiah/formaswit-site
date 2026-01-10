/*
  # Create guide downloads tracking table

  1. New Tables
    - `guide_downloads`
      - `id` (uuid, primary key)
      - `email` (text, required) - Email address of the person downloading
      - `guide_name` (text, required) - Name of the guide downloaded
      - `created_at` (timestamp) - When the download was requested
      
  2. Security
    - Enable RLS on `guide_downloads` table
    - Only authenticated admin users can read download records
    - Anyone can insert (for anonymous guide downloads)
*/

CREATE TABLE IF NOT EXISTS guide_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  guide_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guide_downloads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert download records (for the download form)
CREATE POLICY "Anyone can record guide downloads"
  ON guide_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view download records
CREATE POLICY "Only authenticated users can view downloads"
  ON guide_downloads
  FOR SELECT
  TO authenticated
  USING (true);