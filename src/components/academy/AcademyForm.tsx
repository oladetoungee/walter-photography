import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'react-toastify';
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageHeader } from "@/components/shared/PageHead";
// Define the form schema with Zod
const registrationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  course: z.string().min(1, "Please select a course"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Infer the type from the schema
type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  price: string;
  level: string;
  image: string;
}

interface AcademyFormProps {
  courses: Course[];
  formRef: React.RefObject<HTMLDivElement | null>;
}

export function AcademyForm({ courses, formRef }: AcademyFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  async function onSubmit(data: RegistrationFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/academy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit registration');
      }

      form.reset();
      setSelectedCourse("");
      toast.success('Registration submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting registration:', error);
      toast.error('Failed to submit registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section ref={formRef} className="py-20">
      <div className="max-w-4xl mx-auto px-6">
       
             <PageHeader title="Register for a Course" description="Start your photography journey today" />
  
    

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between"
                        >
                          {selectedCourse || "Select a Course"}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {courses.map((course) => (
                          <DropdownMenuItem
                            key={course.id}
                            onClick={() => {
                              setSelectedCourse(course.title);
                              field.onChange(course.title);
                            }}
                          >
                            {course.title}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your photography experience and goals" 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Spinner size="sm" />
                ) : (
                  'Submit Registration'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
} 