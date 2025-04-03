import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Img,
} from '@react-email/components';

interface BaseEmailProps {
  subject: string;
  content: {
    title: string;
    body: React.ReactNode;
  };
}

export default function BaseEmail({ subject, content }: BaseEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Img
            src="https://res.cloudinary.com/dn2oenkss/image/upload/v1742993619/walter-logo_rsxjcf.png"
            alt="Logo"
            width={150}
            height="auto"
            style={styles.logo}
          />
          <Section style={styles.section}>
            <Heading as="h2" style={styles.heading}>{content.title}</Heading>
            {content.body}
          </Section>
          <Text style={styles.footer}>
            © {new Date().getFullYear()} Walter Jeremiah. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: '#f6f6f6',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  container: {
    margin: '0 auto',
    padding: '20px 0',
  },
  logo: {
    margin: '0 auto 20px',
    display: 'block',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center' as const,
    color: '#666',
    fontSize: '14px',
    marginTop: '20px',
  },
}; 