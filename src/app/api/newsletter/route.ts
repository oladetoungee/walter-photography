import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import NewsletterSubscriberEmail from '@/emails/NewsletterSubscriberEmail';
import NewsletterAdminEmail from '@/emails/NewsletterAdminEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    // Send confirmation email to subscriber
    await resend.emails.send({
      from: 'Walter Photography <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Walter Photography Newsletter',
      react: NewsletterSubscriberEmail({ email }),
    });

    // Send notification to Walter
    await resend.emails.send({
      from: 'Walter Photography <onboarding@resend.dev>',
      to: ['demilad1998@gmail.com'],
      subject: 'New Newsletter Subscriber',
      react: NewsletterAdminEmail({ email }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process newsletter subscription' },
      { status: 500 }
    );
  }
} 