import BaseEmail from './BaseEmail';
import { Text } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  const emailContent = (
    <>
      <Text style={{ marginBottom: '10px' }}>
        <strong>From:</strong> {name} ({email})
      </Text>
      <Text style={{ marginBottom: '20px' }}>
        <strong>Subject:</strong> {subject}
      </Text>
      <Text style={{ marginBottom: '10px' }}>
        <strong>Message:</strong>
      </Text>
      <Text style={{ 
        padding: '15px',
        backgroundColor: '#f9f9f9',
        borderRadius: '4px'
      }}>
        {message}
      </Text>
    </>
  );

  return (
    <BaseEmail
      subject={subject}
      content={{
        title: "New Contact Form Submission",
        body: emailContent,
      }}
    />
  );
} 