import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Lightbulb } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoLearningDisabilities() {
  const { isEasyRead } = useAccessibility();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Brain className="h-16 w-16 text-primary mx-auto" aria-hidden="true" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {isEasyRead ? "What is a Learning Disability?" : "Understanding Learning Disabilities"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Learn about learning disabilities in a simple way."
                : "Important information about learning disabilities and how we can help."}
            </p>
          </div>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card data-testid="card-what-is">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  {isEasyRead ? "What is it?" : "What is a Learning Disability?"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isEasyRead ? (
                    <>
                      A learning disability means someone's brain works differently.
                      <br /><br />
                      It can make some things harder, like:
                      <br />
                      • Learning new things
                      <br />
                      • Understanding information
                      <br />
                      • Remembering things
                      <br />
                      • Talking to people
                      <br /><br />
                      Everyone with a learning disability is different. Some people need a little help. Some people need more help.
                      <br /><br />
                      Having a learning disability does NOT mean someone is not clever or cannot learn. It just means they learn in a different way and might need extra support.
                    </>
                  ) : (
                    <>
                      A learning disability is a reduced intellectual ability and difficulty with everyday activities that affects someone for their whole life. It starts before adulthood and has a lasting effect on development.
                      <br /><br />
                      People with a learning disability may:
                      <br />
                      • Take longer to learn and may need support to develop new skills, understand complicated information, and interact with other people
                      <br />
                      • Have difficulty understanding, learning, and remembering new things
                      <br />
                      • Experience challenges communicating what they want or understanding what's being said to them
                      <br />
                      • Find it hard to cope independently
                      <br /><br />
                      The level of support someone needs depends on individual circumstances. Some people with a learning disability can live independently with minimal support, while others may need 24-hour care.
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Types */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                {isEasyRead ? "Different Types" : "Types of Learning Disabilities"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background" data-testid="card-type-downs">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Down Syndrome" : "Down's Syndrome"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "A condition people are born with. It affects how the brain and body develop."
                      : "A genetic condition that typically causes some level of learning disability, as well as certain physical characteristics."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-type-fragile">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Fragile X Syndrome
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "An inherited condition that can cause learning disabilities and some physical features."
                      : "An inherited condition that causes a range of developmental challenges including learning disabilities and cognitive impairment."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-type-cerebral">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Cerebral Palsy
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Affects movement and posture. Some people with cerebral palsy also have learning disabilities."
                      : "A group of conditions affecting movement and coordination. Some individuals also have associated learning disabilities."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-type-global">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Global Developmental Delay" : "Global Developmental Delay"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "When a child takes longer to reach milestones like walking, talking, or learning."
                      : "When a child takes significantly longer than usual to reach developmental milestones during childhood."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isEasyRead ? "How We Can Help" : "Support Available"}
              </h2>
            </div>

            <Card data-testid="card-support">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-4">
                    <p className="text-lg text-foreground leading-relaxed">
                      {isEasyRead ? (
                        <>
                          At Purple Patch Partners, we help people with learning disabilities:
                          <br /><br />
                          • Do things on their own
                          <br />
                          • Learn new skills
                          <br />
                          • Make friends
                          <br />
                          • Join in with the community
                          <br />
                          • Feel good about themselves
                          <br /><br />
                          Everyone gets the help they need. We support each person in their own special way.
                        </>
                      ) : (
                        <>
                          Purple Patch Partners provides comprehensive, person-centered support for individuals with learning disabilities, including:
                          <br /><br />
                          • Personalized daily activity programs
                          <br />
                          • Life skills development and independence training
                          <br />
                          • Social skills and relationship building
                          <br />
                          • Community integration and participation
                          <br />
                          • Confidence building and self-advocacy
                          <br />
                          • Family and carer support
                          <br /><br />
                          Our approach recognizes that each person is unique, with individual strengths, needs, and aspirations. We work collaboratively to create tailored support plans that promote independence, wellbeing, and quality of life.
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
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Users className="h-16 w-16 text-primary mx-auto" aria-hidden="true" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground">
              {isEasyRead ? "Need Help?" : "Get Support Today"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "If you or someone you know has a learning disability and needs support, we can help."
                : "Contact us to discuss how we can support you or someone you care about with a learning disability."}
            </p>
            <Link href="/referrals">
                        <br></br>
              <Button size="lg" data-testid="button-make-referral">
                {isEasyRead ? "Get in Touch" : "Make a Referral"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
