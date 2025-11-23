"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, User } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

// -----------------------------
// Zod Schema
// -----------------------------
const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please enter your message (at least 10 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

// -----------------------------
// Component
// -----------------------------
export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest("POST", "/api/contact", data); // adjust endpoint
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    } catch (error: any) {
      toast({
        title: "Failed to send",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Card className="text-center max-w-md">
          <CardContent className="p-12 space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <User className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Thank You!</h1>
            <p className="text-lg text-muted-foreground">
              Your message has been sent. We'll contact you soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-black">Contact Us</h1>

      <div className="grid lg:grid-cols-2 gap-20">
        {/* LEFT SIDE — SEND A MESSAGE FORM */}
        <section className="lg:ml-10">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Write your message here..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>

{/* RIGHT SIDE — CONTACT INFO + IMAGES */}
<section className="lg:ml-1">
  <h2 className="text-2xl font-semibold mb-4 text-black">Get in Touch</h2>
  <p className="mb-4 max-w-lg">
    If you have any questions, would like more information about our services,
    or want to make an enquiry, feel free to contact us using the details below.
  </p>

  <div className="space-y-3 text-lg">
    <p>
      <strong>Email:</strong> info@purplepatchpartners.co.uk
    </p>
    <p>
      <strong>Phone:</strong> 01234 567 890
    </p>
    <p>
      <strong>Address:</strong><br />
      Former St Mary's College, Shear Brow, Blackburn BB1 8DS <br />
    </p>
  </div>

  <div className="flex flex-col items-center space-y-6 mt-8">
    <img
      src="/images/committed_small.png"
      alt="Committed"
      className="w-40 h-auto rounded-lg shadow-lg"
    />
    <img
      src="/images/Winner Logo BMA 2020-01.jpg"
      alt="Award Logo"
      className="w-40 h-auto rounded-lg shadow-lg"
    />
  </div>
</section>

      </div>
    </main>
  );
}
