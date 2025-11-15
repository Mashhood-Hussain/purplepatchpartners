import { Card, CardContent } from "@/components/ui/card";
import { Puzzle, Heart, Users, Eye } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoAutism() {
  const { isEasyRead } = useAccessibility();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Puzzle className="h-16 w-16 text-primary mx-auto" aria-hidden="true" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {isEasyRead ? "What is Autism?" : "Understanding Autism"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Learn about autism in a simple way."
                : "Important information about autism spectrum condition and how we provide support."}
            </p>
          </div>
        </div>
      </section>

      {/* What is Autism? */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card data-testid="card-what-is-autism">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  {isEasyRead ? "What is Autism?" : "What is Autism?"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isEasyRead ? (
                    <>
                      Autism means someone's brain works in a different way.
                      <br /><br />
                      People with autism might:
                      <br />
                      • See and hear things more strongly
                      <br />
                      • Like routines and doing things the same way
                      <br />
                      • Find it hard to understand other people's feelings
                      <br />
                      • Not like big changes
                      <br />
                      • Have special interests they really love
                      <br /><br />
                      Every person with autism is different. Some people need a lot of help. Some people need less help.
                      <br /><br />
                      Autism is NOT an illness. It is just a different way of seeing and experiencing the world.
                    </>
                  ) : (
                    <>
                      Autism, or autism spectrum condition (ASC), is a lifelong developmental condition that affects how people communicate and interact with the world around them.
                      <br /><br />
                      Autism is a spectrum condition, meaning it affects people in different ways and to varying degrees. All autistic people share certain characteristics, but they will each have their own individual strengths and challenges.
                      <br /><br />
                      Common characteristics include:
                      <br />
                      • Differences in social communication and interaction
                      <br />
                      • Sensory sensitivities (heightened or reduced sensitivity to sounds, lights, textures, tastes, or smells)
                      <br />
                      • Need for routine and predictability
                      <br />
                      • Intense interests in specific topics or activities
                      <br />
                      • Differences in processing information and learning
                      <br /><br />
                      Autism is not a disease or illness—it's a neurological difference. With the right support and understanding, autistic individuals can lead fulfilling, independent lives.
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Understanding Characteristics */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                {isEasyRead ? "Things to Know" : "Common Characteristics"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background" data-testid="card-social">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Talking to People" : "Social Communication"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Some autistic people find it hard to chat with others or understand body language. They might prefer to be alone sometimes."
                      : "Autistic individuals may find social interaction challenging, including understanding non-verbal cues, maintaining eye contact, or engaging in small talk."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-sensory">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <Eye className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Senses Feel Different" : "Sensory Sensitivities"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Sounds, lights, or textures might feel very strong. Some things might hurt or be uncomfortable."
                      : "Many autistic people experience heightened or reduced sensitivity to sensory input like sounds, lights, textures, or smells."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-routine">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <svg className="h-8 w-8 text-primary" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Like Routines" : "Need for Routine"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Many autistic people like things to stay the same. Changes can be scary or upsetting."
                      : "Predictability and routine can be very important. Unexpected changes may cause anxiety or distress."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background" data-testid="card-interests">
                <CardContent className="p-6 md:p-8 space-y-3">
                  <Heart className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {isEasyRead ? "Special Interests" : "Focused Interests"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead
                      ? "Autistic people often have topics they really love and know a lot about."
                      : "Many autistic individuals develop deep, passionate interests in specific subjects or activities."}
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
                {isEasyRead ? "How We Help" : "Autism Support at Purple Patch Partners"}
              </h2>
            </div>

            <Card data-testid="card-autism-support">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-4">
                    <p className="text-lg text-foreground leading-relaxed">
                      {isEasyRead ? (
                        <>
                          We understand autism. We help autistic people:
                          <br /><br />
                          • Feel safe and comfortable
                          <br />
                          • Learn social skills
                          <br />
                          • Manage sensory needs
                          <br />
                          • Build routines that work
                          <br />
                          • Explore their interests
                          <br />
                          • Make friends
                          <br />
                          • Feel proud of who they are
                          <br /><br />
                          We create a calm, predictable environment. We respect each person's way of doing things.
                        </>
                      ) : (
                        <>
                          Purple Patch Partners provides autism-informed support that recognizes and celebrates neurodiversity. Our services include:
                          <br /><br />
                          • Structured, predictable environments that reduce anxiety
                          <br />
                          • Sensory-friendly spaces and activities
                          <br />
                          • Visual supports and clear communication
                          <br />
                          • Social skills development in comfortable settings
                          <br />
                          • Personalized routines that provide security
                          <br />
                          • Opportunities to pursue special interests
                          <br />
                          • Support for families and carers
                          <br /><br />
                          We work with each individual to understand their unique sensory profile, communication preferences, and support needs, creating a truly person-centered experience.
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
            <Puzzle className="h-16 w-16 text-primary mx-auto" aria-hidden="true" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground">
              {isEasyRead ? "Need Help?" : "Get Autism Support"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "If you or someone you know is autistic and needs support, we can help."
                : "Contact us to discuss autism-informed support tailored to individual needs."}
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
