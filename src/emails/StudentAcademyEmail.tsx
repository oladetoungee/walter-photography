import BaseEmail from './BaseEmail';
import { Text, Section, Button, Hr } from '@react-email/components';

interface StudentAcademyEmailProps {
  name: string;
  course: string;
  courseDetails: {
    duration: string;
    schedule: string;
    price: string;
    level: string;
  };
}

export default function StudentAcademyEmail({
  name,
  course,
  courseDetails,
}: StudentAcademyEmailProps) {
  const emailContent = (
    <>
      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Dear {name},
      </Text>
      
      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Thank you for choosing Walter Academy! We're excited to have you join us for the {course} course.
      </Text>

      <Section style={{ 
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '20px'
      }}>
        <Text style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Course Details:
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Duration: {courseDetails.duration}
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Schedule: {courseDetails.schedule}
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Level: {courseDetails.level}
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Investment: {courseDetails.price}
        </Text>
      </Section>

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        What's Next?
      </Text>
      
      <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
        1. Our team will review your registration and send you a confirmation within 24 hours.
      </Text>
      <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
        2. You'll receive detailed information about payment, course materials and preparation.
      </Text>
      <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
        3. We'll provide you with access to our student portal and resources.
      </Text>

      <Hr style={{ margin: '20px 0' }} />

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        If you have any questions, please don't hesitate to reach out to us at support@walterjeremiah.com
      </Text>

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Best regards,<br />
        The Walter Academy Team
      </Text>
    </>
  );

  return (
    <BaseEmail
      subject={`Welcome to Walter Academy - ${course}`}
      content={{
        title: "Welcome to Walter Academy!",
        body: emailContent,
      }}
    />
  );
} 