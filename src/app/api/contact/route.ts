import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import ContactEmail from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  to: z.string().email()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Walter Photography <onboarding@resend.dev>',
      to: ['demilad1998@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactEmail({ name, email, subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 