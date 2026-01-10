/*
  # Create formations catalogue table

  1. New Tables
    - `formations`
      - `id` (uuid, primary key)
      - `title` (text, required) - Intitulé de la formation
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Description de la formation
      - `objectives` (text[]) - Objectifs pédagogiques
      - `target_audience` (text) - Public visé
      - `prerequisites` (text) - Prérequis
      - `duration_hours` (integer) - Durée en heures
      - `format` (text) - Format: présentiel, distanciel, mixte, AFEST, e-learning
      - `location` (text) - Lieu (si présentiel)
      - `max_participants` (integer) - Nombre maximum de participants
      - `price_ht` (decimal) - Prix HT
      - `price_ttc` (decimal) - Prix TTC
      - `program` (jsonb) - Programme détaillé (modules, contenu)
      - `teaching_methods` (text[]) - Méthodes pédagogiques
      - `evaluation_methods` (text[]) - Modalités d'évaluation
      - `accessibility` (text) - Accessibilité handicap
      - `certification` (text) - Certification délivrée
      - `trainer_name` (text) - Nom du formateur
      - `trainer_qualifications` (text) - Qualifications du formateur
      - `available` (boolean) - Disponible ou à venir
      - `category` (text) - Catégorie de formation
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
  2. Security
    - Enable RLS on `formations` table
    - Anyone can view available formations
    - Only authenticated users can create/update formations
*/

CREATE TABLE IF NOT EXISTS formations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  objectives text[],
  target_audience text,
  prerequisites text,
  duration_hours integer,
  format text,
  location text,
  max_participants integer,
  price_ht decimal(10,2),
  price_ttc decimal(10,2),
  program jsonb,
  teaching_methods text[],
  evaluation_methods text[],
  accessibility text DEFAULT 'Formation accessible aux personnes en situation de handicap. Contacter le référent handicap pour étudier les adaptations possibles.',
  certification text,
  trainer_name text DEFAULT 'Julie Bourdais',
  trainer_qualifications text,
  available boolean DEFAULT false,
  category text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE formations ENABLE ROW LEVEL SECURITY;

-- Anyone can view formations
CREATE POLICY "Anyone can view formations"
  ON formations
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can insert formations
CREATE POLICY "Authenticated users can insert formations"
  ON formations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update formations
CREATE POLICY "Authenticated users can update formations"
  ON formations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete formations
CREATE POLICY "Authenticated users can delete formations"
  ON formations
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_formations_slug ON formations(slug);
CREATE INDEX IF NOT EXISTS idx_formations_category ON formations(category);
CREATE INDEX IF NOT EXISTS idx_formations_available ON formations(available);