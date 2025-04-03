import BaseEmail from './BaseEmail';
import { Text, Section, Button, Hr, Link } from '@react-email/components';

interface NewsletterSubscriberEmailProps {
  email: string;
}

export default function NewsletterSubscriberEmail({
  email,
}: NewsletterSubscriberEmailProps) {
  const emailContent = (
    <>
      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Dear Photography Enthusiast,
      </Text>
      
      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Thank you for subscribing to the Walter Photography newsletter! We're thrilled to have you join our community of photography lovers.
      </Text>

      <Section style={{ 
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '20px'
      }}>
        <Text style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          What You'll Receive:
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Latest photography sessions and behind-the-scenes content
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Exclusive photography tips and techniques
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Special offers and early access to booking slots
        </Text>
        <Text style={{ marginBottom: '5px' }}>
          • Updates on upcoming workshops and events
        </Text>
      </Section>

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Your Next Steps:
      </Text>
      
      <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
        1. Follow us on social media for daily inspiration and updates.
      </Text>
      <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
        2. Check out our portfolio to see our latest work.
      </Text>
      <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
        3. Book a session when you're ready to capture your special moments.
      </Text>

      <Hr style={{ margin: '20px 0' }} />

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        If you have any questions or would like to book a session, feel free to{' '}
        <Link href="https://walter.com/contact" style={{ color: '#0070f3' }}>
          contact me directly
        </Link>.
      </Text>

      <Text style={{ marginBottom: '20px', fontSize: '16px' }}>
        Best regards,<br />
        Walter
      </Text>
    </>
  );

  return (
    <BaseEmail
      subject="Welcome to Walter Photography Newsletter"
      content={{
        title: "Welcome to Walter Photography!",
        body: emailContent,
      }}
    />
  );
} 