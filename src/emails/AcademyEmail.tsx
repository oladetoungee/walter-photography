import BaseEmail from './BaseEmail';
import { Text } from '@react-email/components';

interface AcademyEmailProps {
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
}

export default function AcademyEmail({
  name,
  email,
  phone,
  course,
  message,
}: AcademyEmailProps) {
  const emailContent = (
    <>
      <Text style={{ marginBottom: '10px' }}>
        <strong>Name:</strong> {name}
      </Text>
      <Text style={{ marginBottom: '10px' }}>
        <strong>Email:</strong> {email}
      </Text>
      <Text style={{ marginBottom: '10px' }}>
        <strong>Phone:</strong> {phone}
      </Text>
      <Text style={{ marginBottom: '10px' }}>
        <strong>Selected Course:</strong> {course}
      </Text>
      {message && (
        <>
          <Text style={{ marginBottom: '10px' }}>
            <strong>Additional Message:</strong>
          </Text>
          <Text style={{ 
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            {message}
          </Text>
        </>
      )}
    </>
  );

  return (
    <BaseEmail
      subject={`New Academy Registration: ${course}`}
      content={{
        title: "New Academy Registration",
        body: emailContent,
      }}
    />
  );
} 