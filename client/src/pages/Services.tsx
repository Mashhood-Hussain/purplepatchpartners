import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Utensils, Laptop, Users, Music, Trees, Book, Heart } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Services() {
  const { isEasyRead } = useAccessibility();

  const dailyActivities = [
    {
      icon: Paintbrush,
      title: "Arts & Crafts",
      easyReadTitle: "Arts and Crafts",
      description: "Creative expression through painting, drawing, and craft projects that build fine motor skills and confidence.",
      easyReadDescription: "Make art! Paint, draw, and create fun things."
    },
    {
      icon: Utensils,
      title: "Cooking Skills",
      easyReadTitle: "Cooking",
      description: "Learn to prepare nutritious meals and develop independence in the kitchen with guided cooking sessions.",
      easyReadDescription: "Learn to cook yummy food. Make your own meals."
    },
    {
      icon: Laptop,
      title: "Technology & Learning",
      easyReadTitle: "Computers",
      description: "Digital literacy programs including Learning by Questions tablets to enhance educational development.",
      easyReadDescription: "Use computers and tablets. Learn new things online."
    },
    {
      icon: Music,
      title: "Music & Movement",
      easyReadTitle: "Music and Dancing",
      description: "Engage in music therapy, singing, and movement activities that promote physical and emotional wellbeing.",
      easyReadDescription: "Listen to music, sing songs, and dance. Have fun moving!"
    },
    {
      icon: Trees,
      title: "Outdoor Activities",
      easyReadTitle: "Outside Fun",
      description: "Enjoy nature walks, gardening, and outdoor games that encourage physical activity and environmental awareness.",
      easyReadDescription: "Go outside. Play games. Look at plants and flowers."
    },
    {
      icon: Book,
      title: "Literacy & Numeracy",
      easyReadTitle: "Reading and Math",
      description: "Supportive learning sessions tailored to individual abilities, building essential reading and math skills.",
      easyReadDescription: "Learn to read and count. Go at your own speed."
    },
  ];

  const lifeSkills = [
    {
      title: "Personal Care",
      easyReadTitle: "Taking Care of Yourself",
      description: "Support with daily living skills including hygiene, grooming, and personal organization.",
      easyReadDescription: "Learn to wash, get dressed, and stay clean and healthy."
    },
    {
      title: "Money Management",
      easyReadTitle: "Using Money",
      description: "Practical budgeting skills and understanding money for greater financial independence.",
      easyReadDescription: "Learn about money. How to save and spend wisely."
    },
    {
      title: "Travel Skills",
      easyReadTitle: "Getting Around",
      description: "Building confidence to use public transport and navigate the local community safely.",
      easyReadDescription: "Learn to use buses and trains. Go places safely."
    },
    {
      title: "Communication",
      easyReadTitle: "Talking to People",
      description: "Developing social communication skills for everyday interactions and relationships.",
      easyReadDescription: "Learn to talk to people. Make friends and chat."
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {isEasyRead ? "What We Do Every Day" : "What We Offer"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {isEasyRead
                ? "We do lots of fun activities to help you learn and grow. About 6 hours of activities every day!"
                : "Comprehensive support programs featuring approximately 6 hours of structured daily activities designed to promote skill development, independence, and community engagement."}
            </p>
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {isEasyRead ? "Fun Activities" : "Daily Activities"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isEasyRead
                  ? "Things we do together every day."
                  : "Engaging programs that build confidence and develop new skills."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {dailyActivities.map((activity, index) => (
                <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-activity-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <activity.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {isEasyRead ? activity.easyReadTitle : activity.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {isEasyRead ? activity.easyReadDescription : activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life Skills Development */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                {isEasyRead ? "Learning New Skills" : "Life Skills Development"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isEasyRead
                  ? "We help you learn to do things on your own."
                  : "Personalised support to help you develop essential skills for independent living."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {lifeSkills.map((skill, index) => (
                <Card key={index} className="hover-elevate active-elevate-2 bg-background" data-testid={`card-skill-${index}`}>
                  <CardContent className="p-6 md:p-8 space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {isEasyRead ? skill.easyReadTitle : skill.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {isEasyRead ? skill.easyReadDescription : skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card data-testid="card-community">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {isEasyRead ? "Being Part of the Community" : "Community Involvement"}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {isEasyRead ? (
                        <>
                          We go out into the community together.
                          <br /><br />
                          • Visit local shops and cafes
                          <br />
                          • Go to events and activities
                          <br />
                          • Meet new people
                          <br />
                          • Learn about places near you
                          <br /><br />
                          Being part of your community helps you make friends and feel at home.
                        </>
                      ) : (
                        <>
                          We facilitate regular community engagement activities that help individuals build connections, develop social skills, and participate meaningfully in local life.
                          <br /><br />
                          Our community programs include visits to local businesses, participation in community events, volunteering opportunities, and social activities that promote inclusion and belonging.
                          <br /><br />
                          Future plans include expanding our services to offer wheelchair-accessible activities that welcome even more members of our community.
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

      {/* Technology */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background" data-testid="card-technology">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Laptop className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {isEasyRead ? "Learning with Tablets" : "Learning by Questions Technology"}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {isEasyRead ? (
                        <>
                          We use special tablets to help you learn.
                          <br /><br />
                          The tablets have:
                          <br />
                          • Fun games and quizzes
                          <br />
                          • Learning activities
                          <br />
                          • Your own progress tracker
                          <br /><br />
                          You can learn at your own speed. It's fun and helpful!
                        </>
                      ) : (
                        <>
                          We utilize Learning by Questions (LbQ) tablets as part of our educational support program. This innovative technology provides personalised, interactive learning experiences tailored to individual abilities and learning styles.
                          <br /><br />
                          The platform offers immediate feedback, progress tracking, and engaging content that makes learning enjoyable while building essential literacy and numeracy skills at each person's own pace.
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
<div className="flex justify-center">
  <img
    src="/images/purplelogo.png"
    alt="Purple Patch Partners logo with tagline"
    className="h-10 sm:h-12 object-contain"
  />
</div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {isEasyRead ? "Want to Join Us?" : "Interested in Our Services?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "We would love to help you or someone you know. Talk to us today!"
                : "Contact us to learn more about how our programs can support you or someone you care about."}
            </p>
            <Link href="/referrals">
            <br></br>
              <Button size="lg" data-testid="button-services-refer">
                {isEasyRead ? "Get in Touch" : "Make a Referral"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

