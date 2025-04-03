import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import AcademyEmail from '@/emails/AcademyEmail';
import StudentAcademyEmail from '@/emails/StudentAcademyEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const academySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  course: z.string().min(1),
  message: z.string().optional(),
});

// Course details mapping
const courseDetails = {
  'Fundamentals of Photography': {
    duration: '8 weeks',
    schedule: 'Tuesdays & Thursdays',
    price: '$499',
    level: 'Beginner'
  },
  'Advanced Portrait Photography': {
    duration: '10 weeks',
    schedule: 'Mondays & Wednesdays',
    price: '$699',
    level: 'Advanced'
  },
  'Documentary Photography': {
    duration: '12 weeks',
    schedule: 'Fridays',
    price: '$799',
    level: 'Intermediate'
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = academySchema.parse(body);

    // Get course details
    const details = courseDetails[course as keyof typeof courseDetails];
    if (!details) {
      throw new Error('Invalid course selected');
    }

    // Send welcome email to the student
    await resend.emails.send({
      from: 'Walter Academy <onboarding@resend.dev>',
      to: email,
      subject: `Welcome to Walter Academy - ${course}`,
      react: StudentAcademyEmail({ 
        name,
        course,
        courseDetails: details
      }),
    });

    // Send notification email to Walter
    await resend.emails.send({
      from: 'Walter Academy <onboarding@resend.dev>',
      to: ['demilad1998@gmail.com'],
      subject: `New Academy Registration: ${course}`,
      react: AcademyEmail({ name, email, phone, course, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Academy registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process academy registration' },
      { status: 500 }
    );
  }
} 