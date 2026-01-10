import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, guideName } = body;

    if (!email || !guideName) {
      return NextResponse.json(
        { error: 'Email et nom du guide requis' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from('guide_downloads')
      .insert([
        {
          email,
          guide_name: guideName,
        },
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement' },
        { status: 500 }
      );
    }

    try {
      await fetch('https://formspree.io/f/xnnqzwok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'julie@formaswift.com',
          subject: `Nouveau téléchargement de guide: ${guideName}`,
          message: `Une personne a téléchargé le guide "${guideName}".\n\nEmail: ${email}\n\nDate: ${new Date().toLocaleString('fr-FR')}`,
        }),
      });
    } catch (emailError) {
      console.error('Email notification error:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing guide download:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
