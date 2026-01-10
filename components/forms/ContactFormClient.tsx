'use client';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), { ssr: false });

export default function ContactFormClient() {
  return <ContactForm />;
}
