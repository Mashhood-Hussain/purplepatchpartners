import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Target, ArrowRight, Smile, BookOpen, Paintbrush } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

import { useState, useEffect } from "react";

function Slideshow() {
  const images = [
    "01.jpg",
    "archerypic1.jpg",
    "archiesgrouppicture.jpeg",
    "artsandcraftpic4outside.jpg", 
    "blackpoolbeachpic1.jpg",
    "blackpoolbeachpic2.jpg",
    "britaininbloomnorthwestawardceremony.jpeg",
    "cathedralgardenmanchester.jpg",
    "certificateforindoorskydiving.jpg",

    
    "cleaningleavesfromtheroadpic.jpg",
    "cookingpic1.jpg",
    "cookingpic3.jpg",
    "cookingpic4.jpg",
    "craftprojectcoursecertificatepic2.jpg",
    "craftprojectcoursecertificatepic3.jpg",
    "cricketpic1.jpg",
    "diggingsandpic.jpg",
    "skydivinggrouppic.jpg",
    "skydivinggrouppic2.jpg",
    "wheelchairwomenpic.jpg",
    "flyingmanindoorskydivingpic2.jpg",
    "footballpic1.jpg",
    "gardeningpic3.jpg",
    "goingtoalpacafarmpic.jpg",
    "goingtoalpacafarmpic2.jpg",
    "alpacafarmpic3.jpg",
    "highlandcowpic2.jpg",
    "learningpic1.jpg",
    "meetinghighlandcowpic.jpg",
    "nasheedproductionpic1.jpg",
    "playingbowlingpic.jpg",
    "playingbowlingpic2.jpg",
    "playingludogamepic.jpg",
    "playingpuzzlegame.jpg",
    "prayermatdrawingartscraft.jpg",
    "promotingpurplepatchpic.jpg",
    "purplepatchkeychainsmadeinartsandcraft.jpg",
    "ridingtricyclepic.jpg",
    "scoutspic1.jpg",
    "sellingitemstoraisemoneyforcharitypic.jpeg",
    "sensoryplaypic1.jpg",
    "sharingpic.jpg",
    "wheelchairbasketballpic.jpg",
    "wheelchairbasketballpic2.jpg",
    "woodsandcraftoutsidepic.jpg",
    "woodsandcraftoutsidepic2.jpg",
  ];

const [index, setIndex] = useState(0);

  const speed = 5000; 

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, speed);

    return () => clearInterval(timer);
  }, [speed, images.length]); // important!

  return (
    <div className="relative w-full h-[500px] md:h-[530px] overflow-hidden rounded-xl shadow-xl">

      <img
        src={`/images/${images[index]}`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60 md:hidden"
      />


      <img
        src={`/images/${images[index]}`}
        alt="Activity slideshow"
        className="
          relative z-10 w-full h-full
          object-contain
          md:object-cover
          transition-opacity duration-700
        "
      />
    </div>
  );
}

export default function Home() {
  const { isEasyRead } = useAccessibility();

  const services = [
    {
      icon: Users,
      title: "Daily Activities",
      easyReadTitle: "Fun Activities Every Day",
      description: "Engaging daily programs designed to build confidence, develop skills, and foster independence through structured activities.",
      easyReadDescription: "We do fun things together every day. Art, cooking, games, and learning."
    },
    {
      icon: Lightbulb,
      title: "Life Skills Development",
      easyReadTitle: "Learn New Skills",
      description: "Personalised support to help individuals develop essential life skills for greater independence and community participation.",
      easyReadDescription: "We help you learn how to do things on your own. Cooking, shopping, and being safe."
    },
    {
      icon: Target,
      title: "Community Involvement",
      easyReadTitle: "Make Friends",
      description: "Opportunities to engage with the local community through events, activities, and meaningful social connections.",
      easyReadDescription: "Meet new friends. Go to places in the community. Have fun together."
    },
  ];

  const successStories = [
    {
      name: "Rafik",
      quote: isEasyRead
        ? "I love coming here. I made lots of friends and learned to cook!"
        : "Purple Patch Partners has transformed my life. I've gained confidence and independence I never thought possible.",
      image: "/images/03.jpg"
    },
    {
      name: "Abdul",
      quote: isEasyRead
        ? "The staff are kind. I do art and play games. It makes me happy!"
        : "The supportive environment here has allowed me to develop new skills and connect with an amazing community.",
      image: "/images/04.jpg"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/3 via-primary/1 to-background py-10 md:py-16 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {isEasyRead ? (
                  <>Help People Shine Bright</>
                ) : (
                  <>Empowering Individuals to Reach Their Full Potential</>
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {isEasyRead
                  ? "We support people with learning disabilities and autism. We help them be happy, learn new things, and make friends."
                  : "Purple Patch Partners provides compassionate, inclusive support for people with learning disabilities and autism, helping them achieve independence and thrive in their community."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/referrals">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-refer">
                    {isEasyRead ? "Get Help Now" : "Refer Someone"}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-hero-services">
                    {isEasyRead ? "What We Do" : "Learn About Our Services"}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
                  <Slideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-background" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isEasyRead ? "What We Do" : "Our Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "We help people every day with fun activities and learning."
                : "Comprehensive support programs designed to foster growth, independence, and community engagement."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-service-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {isEasyRead ? service.easyReadTitle : service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEasyRead ? service.easyReadDescription : service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" data-testid="button-learn-more-services">
                {isEasyRead ? "See All Activities" : "Learn More About Our Services"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
<img
  src="/images/purplelogo.png"
  alt="Purple Patch Partners logo with tagline"
  className="h-10 sm:h-12 object-contain"
/>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground">
              {isEasyRead ? "Our Promise" : "Our Ethos"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {isEasyRead
                ? "We believe everyone is special. We help people with learning disabilities and autism to be happy, safe, and proud of themselves. We want everyone to shine like a purple patch!"
                : "At Purple Patch Partners, we believe every individual deserves the opportunity to thrive. We're dedicated to providing inclusive, person-centered support that empowers people with learning disabilities and autism to live fulfilling, independent lives while making meaningful contributions to their community."}
            </p>
            <Link href="/mission">
            <br></br>
              <Button variant="outline" size="lg" data-testid="button-mission">
                {isEasyRead ? "Read More" : "Learn About Our Values"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isEasyRead ? "Happy Stories" : "Success Stories"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "See how we help people shine!"
                : "Hear from individuals who have found their purple patch and achieved remarkable growth."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-story-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={story.image}
                      alt={`${story.name}`}
                      className="w-16 h-16 rounded-full object-cover"
                      data-testid={`img-story-${index}`}
                    />
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-card-foreground">
                        {story.name}
                      </h3>
                      <Smile className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/stories">
              <Button size="lg" data-testid="button-all-stories">
                {isEasyRead ? "See More Stories" : "Read All Success Stories"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              {isEasyRead ? "Need Help?" : "Ready to Make a Referral?"}
            </h2>
            <p className="text-lg opacity-90">
              {isEasyRead
                ? "Talk to us today. We can help you or someone you know."
                : "Get in touch with our team to discuss how we can support you or someone you care about."}
            </p>
            <Link href="/referrals">
            <br></br>
            <br></br>
              <Button size="lg" variant="secondary" data-testid="button-cta-refer">
                {isEasyRead ? "Contact Us" : "Start a Referral"}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
