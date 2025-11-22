import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Phone, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReferralSchema, type InsertReferral } from "@shared/schema";

export default function Referrals() {
  const { isEasyRead } = useAccessibility();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  // --- DEFAULT VALUES: build as a Partial then assert to InsertReferral to satisfy TS
const defaultValues: Partial<InsertReferral> = {
  name: "",
  email: "",
  phone: "",
  guardianName: "",
  referredPersonName: "",
  canCollectDOB: "no",
  dob: undefined,
  ageGroup: undefined, // ✅ FIXED
  needsAssessment: "",
  referralSource: "",
  additionalNotes: "",
};


  const form = useForm<InsertReferral>({
    resolver: zodResolver(insertReferralSchema),
    // assert defaultValues to InsertReferral because useForm expects the full type
    defaultValues: defaultValues as InsertReferral,
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertReferral) => {
      return await apiRequest("POST", "/api/referrals", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: isEasyRead ? "Form Sent!" : "Referral Submitted Successfully",
        description: isEasyRead
          ? "We got your message. Someone will call you soon."
          : "Thank you for your referral. Our team will contact you within 2 business days.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: isEasyRead ? "Something Went Wrong" : "Submission Failed",
        description:
          error.message ||
          (isEasyRead ? "Please try again." : "Please check your information and try again."),
        variant: "destructive",
      });
    },
  });

const onSubmit = (data: InsertReferral) => {
  if (data.canCollectDOB === "yes") data.ageGroup = undefined;
  else data.dob = undefined;

  submitMutation.mutate(data);
};



  // Derived watched value (safe typing)
  const canCollect = form.watch("canCollectDOB") === "yes";

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-[60vh] items-center justify-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="text-center" data-testid="card-success">
            <CardContent className="p-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {isEasyRead ? "Thank You!" : "Referral Submitted Successfully"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {isEasyRead ? (
                  <>
                    We got your message!
                    <br />
                    <br />
                    Someone from our team will call you soon.
                    <br />
                    <br />
                    Usually within 2 days.
                  </>
                ) : (
                  <>
                    Thank you for submitting your referral. Our team will review the information and contact you within 2 business days to discuss next steps.
                    <br />
                    <br />
                    If you have any urgent questions, please don't hesitate to call us directly.
                  </>
                )}
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="button-submit-another">
                {isEasyRead ? "Send Another Form" : "Submit Another Referral"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {isEasyRead ? "Get Help" : "Make a Referral"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Fill out this form to get support. We will call you back."
                : "Complete this form to refer yourself or someone you care about to our services. Our team will contact you to discuss how we can help."}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <Card data-testid="card-referral-form">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-6 w-6 text-primary" aria-hidden="true" />
                      {isEasyRead ? "Your Information" : "Referral Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Your Name" : "Full Name"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={isEasyRead ? "Type your name" : "Enter full name"} className="min-h-12" data-testid="input-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Guardian Name */}
                    <FormField
                      control={form.control}
                      name="guardianName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Name of the grown-up" : "Guardian's Name"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={isEasyRead ? "Write the grown-up’s name" : "Enter guardian's full name"}
                              className="min-h-12"
                              data-testid="input-guardian-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Referred Person Name */}
                    <FormField
                      control={form.control}
                      name="referredPersonName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Name of the person you want help for" : "Referred Person's Name"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={isEasyRead ? "Write their name here" : "Enter referred person's name"}
                              className="min-h-12"
                              data-testid="input-referred-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Can Collect DOB */}
                    <FormField
                      control={form.control}
                      name="canCollectDOB"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Can we collect the person's date of birth?" : "Can we collect the referred person's Date of Birth?"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(v: string) => {
                                field.onChange(v);
                                // reset dependent fields
                                if (v === "yes") {
                                  form.setValue("ageGroup", undefined);
                                } else {
                                  form.setValue("dob", undefined);
                                }
                              }}
                              value={String(field.value ?? "")}
                            >
                              <SelectTrigger className="min-h-12">
                                <SelectValue placeholder={isEasyRead ? "Choose one" : "Choose yes or no"} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">{isEasyRead ? "Yes" : "Yes - collect DOB"}</SelectItem>
                                <SelectItem value="no">{isEasyRead ? "No" : "No - cannot collect DOB"}</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Conditionally show DOB or Age Group */}
                    {canCollect ? (
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">{isEasyRead ? "Their date of birth (day, month, year)" : "Date of Birth"}</FormLabel>
                            <FormControl>
                              <Input type="date" className="min-h-12" data-testid="input-dob" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <FormField
                        control={form.control}
                        name="ageGroup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              {isEasyRead ? "Are they over or under 18?" : "Age Group"} <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Select onValueChange={(v: string) => field.onChange(v)} value={String(field.value ?? "")}>
                                <SelectTrigger className="min-h-12" data-testid="select-age-group">
                                  <SelectValue placeholder={isEasyRead ? "Choose one" : "Select age group"} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="under18">{isEasyRead ? "Under 18" : "Under 18"}</SelectItem>
                                  <SelectItem value="over18">{isEasyRead ? "Over 18" : "Over 18"}</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Email Address" : "Email"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={isEasyRead ? "your.email@example.com" : "Enter email address"}
                              className="min-h-12"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Phone Number" : "Contact Number"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder={isEasyRead ? "01234 567890" : "Enter phone number"} className="min-h-12" data-testid="input-phone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Referral Source */}
                    <FormField
                      control={form.control}
                      name="referralSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "How Did You Hear About Us?" : "Referral Source"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={String(field.value ?? "")}>
                            <FormControl>
                              <SelectTrigger className="min-h-12" data-testid="select-referral-source">
                                <SelectValue placeholder={isEasyRead ? "Choose one" : "Select referral source"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="family">{isEasyRead ? "Family or Friend" : "Family Member"}</SelectItem>
                              <SelectItem value="carer">{isEasyRead ? "Someone Who Helps Me" : "Carer"}</SelectItem>
                              <SelectItem value="social-worker">{isEasyRead ? "Social Worker" : "Social Worker"}</SelectItem>
                              <SelectItem value="healthcare">{isEasyRead ? "Doctor or Nurse" : "Healthcare Professional"}</SelectItem>
                              <SelectItem value="self">{isEasyRead ? "Myself" : "Self-Referral"}</SelectItem>
                              <SelectItem value="other">{isEasyRead ? "Other" : "Other"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Needs Assessment */}
                    <FormField
                      control={form.control}
                      name="needsAssessment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Tell Us About the Person" : "Needs Assessment"} <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormDescription>
                            {isEasyRead
                              ? "Tell us about the person who needs help. What kind of support do they need? (Write at least 50 characters)"
                              : "Please provide details about the individual's needs, current situation, and what kind of support would be most beneficial. (Minimum 50 characters)"}
                          </FormDescription>
                          <FormControl>
                            <Textarea
                              placeholder={isEasyRead ? "Example: John is 25 years old. He has autism. He would like help with cooking and making friends." : "Describe the individual's needs, abilities, and support requirements..."}
                              rows={6}
                              className="resize-none"
                              data-testid="textarea-needs"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Additional Notes */}
                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">
                            {isEasyRead ? "Anything Else?" : "Additional Notes"} {isEasyRead ? "(If you want)" : "(Optional)"}
                          </FormLabel>
                          <FormControl>
                            <Textarea placeholder={isEasyRead ? "Any other information you want to tell us" : "Any other information that would help us provide better support"} rows={4} className="resize-none" data-testid="textarea-notes" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full" disabled={submitMutation.isPending} data-testid="button-submit-referral">
                        {submitMutation.isPending ? (isEasyRead ? "Sending..." : "Submitting...") : isEasyRead ? "Send Form" : "Submit Referral"}
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      {isEasyRead ? (
                        <>
                          Your information is safe with us.
                          <br />
                          We will only use it to help you.
                        </>
                      ) : (
                        <>
                          By submitting this form, you consent to Purple Patch Partners contacting you regarding this referral. We respect your privacy and will handle your information in accordance with our{" "}
                          <a href="#" className="text-primary hover:underline">
                            privacy policy
                          </a>
                          .
                        </>
                      )}
                    </p>
                  </CardContent>
                </Card>
              </form>
            </Form>
          </div>

          {/* Contact Information Sidebar */}
          <div className="max-w-2xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            <Card data-testid="card-contact-phone">
              <CardContent className="p-6 space-y-3">
                <Phone className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-lg">{isEasyRead ? "Call Us" : "Phone"}</h3>
                <p className="text-muted-foreground">{isEasyRead ? "You can call us if you prefer talking on the phone." : "Prefer to speak to someone directly?"}</p>
                <a href="tel:01234567890" className="text-primary font-semibold hover:underline" data-testid="link-phone">
                  01234 567890
                </a>
              </CardContent>
            </Card>

            <Card data-testid="card-contact-email">
              <CardContent className="p-6 space-y-3">
                <Mail className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-lg">{isEasyRead ? "Email Us" : "Email"}</h3>
                <p className="text-muted-foreground">{isEasyRead ? "You can send us an email too." : "Send us an email with your questions."}</p>
                <a href="mailto:info@purplepatchpartners.co.uk" className="text-primary font-semibold hover:underline break-all" data-testid="link-email">
                  info@purplepatchpartners.co.uk
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
