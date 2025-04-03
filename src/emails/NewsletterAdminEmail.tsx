import BaseEmail from './BaseEmail';
import { Text, Section, Hr } from '@react-email/components';

interface NewsletterAdminEmailProps {
  email: string;
}

export default function NewsletterAdminEmail({
  email,
}: NewsletterAdminEmailProps) {
  const emailContent = (
    <>
      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        New Newsletter Subscriber
      </Text>
      
      <Section style={{ 
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '20px'
      }}>
        <Text style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Subscriber Details:
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Email: {email}
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Subscribed on: {new Date().toLocaleString()}
        </Text>
      </Section>

      <Hr style={{ margin: '20px 0' }} />

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        This subscriber has been added to your newsletter list. You can now send them updates about your latest work, photography tips, and exclusive offers.
      </Text>

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Best regards,<br />
        Your Newsletter System
      </Text>
    </>
  );

  return (
    <BaseEmail
      subject="New Newsletter Subscriber"
      content={{
        title: "New Newsletter Subscriber",
        body: emailContent,
      }}
    />
  );
} 