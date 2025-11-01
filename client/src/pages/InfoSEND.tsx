import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, FileText, Phone } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoSEND() {
  const { isEasyRead } = useAccessibility();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <GraduationCap className="h-16 w-16 text-primary mx-auto" aria-hidden="true" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {isEasyRead ? "SEND Support in Blackburn" : "SEND Support & Blackburn Local Offer"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Information about help for children and adults with special needs in Blackburn."
                : "Information about Special Educational Needs and Disabilities (SEND) support available in Blackburn with Darwen."}
            </p>
          </div>
        </div>
      </section>

      {/* What is SEND? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card data-testid="card-what-is-send">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  {isEasyRead ? "What is SEND?" : "What is SEND?"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isEasyRead ? (
                    <>
                      SEND stands for Special Educational Needs and Disabilities.
                      <br /><br />
                      It means:
                      <br />
                      • Children or adults who need extra help to learn
                      <br />
                      • People who have disabilities
                      <br />
                      • Anyone who needs support to do everyday things
                      <br /><br />
                      SEND can include learning disabilities, autism, physical disabilities, and more.
                    </>
                  ) : (
                    <>
                      Special Educational Needs and Disabilities (SEND) refers to children and young people aged 0-25 who have learning difficulties or disabilities that make it harder for them to learn than most others of the same age.
                      <br /><br />
                      SEND can include:
                      <br />
                      • Learning disabilities
                      <br />
                      • Autism spectrum conditions
                      <br />
                      • Physical or sensory disabilities
                      <br />
                      • Speech, language, and communication needs
                      <br />
                      • Social, emotional, and mental health difficulties
                      <br /><br />
                      Young people and adults over 16 with SEND are entitled to support to help them achieve their goals and live independently.
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blackburn Local Offer */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                {isEasyRead ? "Help in Blackburn" : "Blackburn with Darwen Local Offer"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isEasyRead
                  ? "Blackburn has lots of services to help people with SEND."
                  : "The Local Offer is information about services available in Blackburn with Darwen for people with SEND."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background" data-testid="card-education">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "School Help" : "Education Support"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Special help in schools. Extra support for learning. Special schools for children who need them."
                      : "Educational support including special schools, specialist provision in mainstream schools, and additional learning support."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-health">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <Heart className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Health Services" : "Health & Wellbeing"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Doctors and nurses who understand SEND. Therapy services. Mental health support."
                      : "Health services including specialist therapies, mental health support, and medical care for people with SEND."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-social">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Social Care" : "Social Care Services"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Social workers who can help. Support for families. Help with daily living."
                      : "Social care support including care assessments, personal budgets, and support for independent living."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-activities">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <svg className="h-8 w-8 text-primary" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Activities and Groups" : "Community Activities"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Fun activities and clubs. Groups to join. Places like Purple Patch Partners."
                      : "Community-based activities, support groups, and organizations like Purple Patch Partners that provide social opportunities."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Access Support */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isEasyRead ? "How to Get Help" : "Accessing SEND Support"}
              </h2>
            </div>

            <Card data-testid="card-access-support">
              <CardContent className="p-8 md:p-12 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  {isEasyRead ? (
                    <>
                      To get SEND support in Blackburn:
                      <br /><br />
                      1. Talk to your doctor, school, or social worker
                      <br />
                      2. They can help you get an assessment
                      <br />
                      3. The assessment finds out what help you need
                      <br />
                      4. You get a plan for the support you need
                      <br />
                      5. Services like Purple Patch Partners can be part of your plan
                      <br /><br />
                      You can also contact Blackburn with Darwen Council directly.
                    </>
                  ) : (
                    <>
                      To access SEND support in Blackburn with Darwen:
                      <br /><br />
                      1. <strong>Request an Assessment</strong> - Contact your school, GP, or the local authority's SEND team to request a needs assessment.
                      <br /><br />
                      2. <strong>Education, Health and Care Plan (EHCP)</strong> - For complex needs, you may be eligible for an EHCP, which outlines the support required.
                      <br /><br />
                      3. <strong>Contact the SEND Team</strong> - Blackburn with Darwen's SEND team can provide information and guidance about available services.
                      <br /><br />
                      4. <strong>Community Organizations</strong> - Services like Purple Patch Partners can provide day-to-day support as part of your care plan.
                      <br /><br />
                      For more information, visit the Blackburn with Darwen Local Offer website or contact the council's SEND team.
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purple Patch Partners Role */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background" data-testid="card-ppp-role">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-10 w-10 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-4">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {isEasyRead ? "How Purple Patch Partners Helps" : "Purple Patch Partners' Role in SEND Support"}
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      {isEasyRead ? (
                        <>
                          Purple Patch Partners works with SEND services in Blackburn.
                          <br /><br />
                          We provide:
                          <br />
                          • Daily activities and learning
                          <br />
                          • Help with life skills
                          <br />
                          • A safe, friendly place
                          <br />
                          • Support from trained staff
                          <br /><br />
                          We can be part of your SEND support plan.
                        </>
                      ) : (
                        <>
                          Purple Patch Partners is a key provider of community-based support for adults with learning disabilities and autism in Blackburn with Darwen.
                          <br /><br />
                          As part of the Local Offer, we provide:
                          <br />
                          • Structured daily activity programs
                          <br />
                          • Life skills development and independence training
                          <br />
                          • Social opportunities and community engagement
                          <br />
                          • Person-centered support tailored to individual needs
                          <br /><br />
                          We work collaboratively with families, social workers, and other professionals to ensure comprehensive, coordinated support.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Phone className="h-16 w-16 text-primary mx-auto" aria-hidden="true" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {isEasyRead ? "Want to Know More?" : "Need More Information?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Talk to us about how we can help you or someone you know."
                : "Contact us to discuss how Purple Patch Partners can support you or someone you care about through SEND services."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/referrals">
                <Button size="lg" data-testid="button-make-referral">
                  {isEasyRead ? "Get in Touch" : "Make a Referral"}
                </Button>
              </Link>
              <a href="tel:01234567890">
                <Button size="lg" variant="outline" data-testid="button-call">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {isEasyRead ? "Call Us" : "Call 01234 567890"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
