import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown';
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(key);
  
  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per hour)
    rateLimitStore.set(key, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return false;
  }
  
  if (limit.count >= 5) {
    return true;
  }
  
  limit.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide.' },
        { status: 400 }
      );
    }

    // Content validation
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Le nom doit contenir entre 2 et 100 caractères.' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Le message doit contenir entre 10 et 2000 caractères.' },
        { status: 400 }
      );
    }

    // Here you would typically send the email using a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    
    // For this example, we'll just log the data and return success
    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || 'Non renseigné',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: getRateLimitKey(request),
    });

    // In production, you would send the actual email here:
    /*
    await sendEmail({
      to: process.env.CONTACT_EMAIL || 'contact@formaswift.fr',
      subject: `Nouvelle demande de ${name}`,
      html: `
        <h2>Nouvelle demande depuis le site FormaSwift</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Besoins:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: 'Demande envoyée avec succès!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}