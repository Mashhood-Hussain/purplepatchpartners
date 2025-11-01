import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Star } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export default function Mission() {
  const { isEasyRead } = useAccessibility();

  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      easyReadTitle: "Everyone Belongs",
      description: "We celebrate diversity and ensure everyone feels valued, respected, and included in all aspects of our community.",
      easyReadDescription: "Everyone is welcome here. We are all different and that is good. Everyone can join in."
    },
    {
      icon: Users,
      title: "Empowerment",
      easyReadTitle: "You Can Do It",
      description: "We support individuals to make their own choices, develop their potential, and take control of their lives.",
      easyReadDescription: "We help you make your own choices. We believe you can do amazing things."
    },
    {
      icon: Shield,
      title: "Respect",
      easyReadTitle: "Be Kind",
      description: "We treat everyone with dignity, compassion, and understanding, honoring their unique perspectives and experiences.",
      easyReadDescription: "We are kind to everyone. We listen to you. Your feelings matter."
    },
    {
      icon: Star,
      title: "Quality",
      easyReadTitle: "Do Our Best",
      description: "We are committed to providing the highest standard of person-centered support and continuously improving our services.",
      easyReadDescription: "We always try our best. We want to help you be happy and safe."
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {isEasyRead ? "Our Promise" : "Our Mission & Values"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {isEasyRead
                ? "We help people with learning disabilities and autism be happy and do well."
                : "Dedicated to empowering individuals with learning disabilities and autism to achieve their goals and live fulfilling lives."}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isEasyRead ? "What We Do" : "Our Mission"}
              </h2>
            </div>

            <Card data-testid="card-mission">
              <CardContent className="p-8 md:p-12 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {isEasyRead ? (
                    <>
                      <strong className="text-foreground">Purple Patch Partners helps people shine.</strong>
                      <br /><br />
                      We work with people who have learning disabilities and autism.
                      <br /><br />
                      We help them:
                      <br />
                      • Learn new things
                      <br />
                      • Make friends
                      <br />
                      • Be independent
                      <br />
                      • Feel proud of themselves
                      <br />
                      • Join in with their community
                      <br /><br />
                      Everyone deserves to be happy and do well. We help make that happen.
                    </>
                  ) : (
                    <>
                      <strong className="text-foreground">Purple Patch Partners is committed to transforming lives through person-centered, inclusive support.</strong>
                      <br /><br />
                      We provide comprehensive services for individuals with learning disabilities and autism, helping them develop essential life skills, build meaningful relationships, and actively participate in their community.
                      <br /><br />
                      Our approach is rooted in the belief that every person has unique strengths and potential. We work collaboratively with individuals, families, and carers to create personalized support plans that promote independence, confidence, and overall wellbeing.
                      <br /><br />
                      Through structured daily activities, skill development programs, and community engagement opportunities, we empower the people we support to achieve their goals and live fulfilling, independent lives.
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                {isEasyRead ? "What We Believe" : "Our Core Values"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isEasyRead
                  ? "These are the important things we always remember."
                  : "The principles that guide everything we do."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate active-elevate-2 bg-background" data-testid={`card-value-${index}`}>
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {isEasyRead ? value.easyReadTitle : value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isEasyRead ? value.easyReadDescription : value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isEasyRead ? "How We Help" : "Our Approach"}
              </h2>
            </div>

            <div className="space-y-6">
              <Card data-testid="card-approach-1">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {isEasyRead ? "We Listen to You" : "Person-Centered Support"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "We ask you what you want. We help you make choices. Your ideas are important to us."
                      : "Every individual is unique, with their own goals, preferences, and aspirations. We take time to understand what matters most to each person we support and tailor our services accordingly."}
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-approach-2">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {isEasyRead ? "Working Together" : "Collaborative Partnership"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "We work with your family and friends. We all help each other. Together we make things better."
                      : "We work closely with families, carers, social workers, and healthcare professionals to ensure coordinated, comprehensive support that addresses all aspects of an individual's wellbeing."}
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-approach-3">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {isEasyRead ? "Learning and Growing" : "Continuous Development"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "You can learn new things every day. We help you get better at things. You can be proud of what you do."
                      : "We provide ongoing opportunities for skill development and personal growth, celebrating achievements and supporting individuals to reach their full potential at their own pace."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
