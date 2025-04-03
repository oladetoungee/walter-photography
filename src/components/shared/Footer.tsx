'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { Spinner } from "@/components/ui/spinner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

// Define the form schema with Zod
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Infer the type from the schema
type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: NewsletterFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      form.reset();
      toast.success('Successfully subscribed to newsletter!');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">About Walter</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Walter is a visionary photographer capturing life's most precious moments through his unique lens.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio/documentary" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentary
                </Link>
              </li>
              <li>
                <Link href="/portfolio/portraits" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portraits
                </Link>
              </li>
              <li>
                <Link href="/portfolio/events" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/portfolio/modeling" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Modeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to receive updates and exclusive offers from the Walter Brand.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full p-3 bg-transparent border border-gray-700 rounded-md focus:border-white outline-none transition-colors text-sm text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <Spinner size="sm" />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Walter Photography. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 