'use client';

import { ContactForm } from "@/components/contact/ContactForm"
import { PageHeader } from '../shared/PageHead';

export default function ContactSection() {
  return (
    <section className="contact-section py-24">
      <div className="max-w-4xl mx-auto px-6">
       <PageHeader title="Contact Us" description="We would love to hear from you" />

          <ContactForm />       
      </div>
    </section>
  );
} 