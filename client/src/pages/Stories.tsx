import { Card, CardContent } from "@/components/ui/card";
import { Heart, Smile, Trophy } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export default function Stories() {
  const { isEasyRead } = useAccessibility();

  const featuredStory = {
    name: "Emma",
    age: 28,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
    quote: isEasyRead
      ? "I was shy before. Now I have friends and I can cook!"
      : "When I first came to Purple Patch Partners, I struggled with confidence and independence. Now I've developed cooking skills, made wonderful friends, and feel proud of what I can achieve.",
    story: isEasyRead
      ? "Emma came to us 2 years ago. She was very quiet and did not talk much. She did not know how to cook. Now Emma loves cooking class! She makes lunch for everyone. She has lots of friends. Emma smiles every day. We are so proud of Emma!"
      : "Emma joined Purple Patch Partners two years ago, initially struggling with social anxiety and lacking basic life skills. Through our structured support programs and encouraging environment, she discovered a passion for cooking. Today, Emma regularly prepares meals for her peers, has developed strong friendships within the community, and radiates confidence. Her transformation demonstrates the power of person-centered support and belief in individual potential.",
  };

  const successStories = [
    {
      name: "Michael",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: isEasyRead
        ? "I learned to use the bus by myself. I feel like a grown-up!"
        : "Learning to navigate public transport independently has given me a newfound sense of freedom and confidence.",
      achievement: isEasyRead ? "Can use buses alone" : "Independent travel skills"
    },
    {
      name: "Aisha",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
      quote: isEasyRead
        ? "I made a painting that won a prize. My family is so proud!"
        : "Discovering my artistic abilities through Purple Patch Partners has opened up a whole new world of self-expression.",
      achievement: isEasyRead ? "Won art competition" : "Artistic development"
    },
    {
      name: "Daniel",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      quote: isEasyRead
        ? "I help with the garden now. I know all the plant names!"
        : "Working in our community garden has taught me responsibility and given me a skill I can share with others.",
      achievement: isEasyRead ? "Garden helper" : "Community contribution"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Trophy className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {isEasyRead ? "Happy Stories" : "Hitting Their Purple Patch"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Read about people who found their shine at Purple Patch Partners!"
                : "Celebrating the remarkable achievements and personal growth of the individuals we support."}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card data-testid="card-featured-story">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                    <img
                      src={featuredStory.image}
                      alt={`${featuredStory.name}`}
                      className="w-full h-full object-cover"
                      data-testid="img-featured-story"
                    />
                  </div>
                  <div className="p-8 md:p-12 space-y-6">
                    <div className="flex items-center gap-3">
                      <Heart className="h-8 w-8 text-primary" aria-hidden="true" />
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                          {featuredStory.name}
                        </h2>
                        <p className="text-muted-foreground">
                          {isEasyRead ? `${featuredStory.age} years old` : `Age ${featuredStory.age}`}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                      "{featuredStory.quote}"
                    </blockquote>
                    <p className="text-foreground leading-relaxed">
                      {featuredStory.story}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                {isEasyRead ? "More Happy People" : "More Success Stories"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isEasyRead
                  ? "Everyone can shine. Here are more stories of people doing great things."
                  : "Every individual's journey is unique and inspiring."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="hover-elevate active-elevate-2 bg-background" data-testid={`card-story-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        data-testid={`img-story-${index}`}
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Smile className="h-5 w-5 text-primary" aria-hidden="true" />
                        <h3 className="font-heading text-xl font-semibold text-foreground">
                          {story.name}
                        </h3>
                      </div>
                      <div className="bg-primary/10 px-3 py-1 rounded-full inline-block">
                        <span className="text-sm font-medium text-primary">
                          {story.achievement}
                        </span>
                      </div>
                      <blockquote className="text-muted-foreground italic">
                        "{story.quote}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {isEasyRead ? "You Can Shine Too!" : "Ready to Start Your Journey?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "Everyone has special talents. We can help you find yours. Talk to us today!"
                : "Every person has unique potential waiting to be discovered. Let us help you or someone you care about reach their purple patch."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
