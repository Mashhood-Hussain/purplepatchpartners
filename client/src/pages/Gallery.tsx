import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { X } from "lucide-react";

export default function Gallery() {
  const { isEasyRead } = useAccessibility();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'activities' | 'achievements' | 'events'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All', easyReadLabel: 'Everything' },
    { id: 'activities', label: 'Daily Activities', easyReadLabel: 'Activities' },
    { id: 'achievements', label: 'Achievements', easyReadLabel: 'Proud Moments' },
    { id: 'events', label: 'Events', easyReadLabel: 'Special Days' },
  ];

  const galleryItems = [
    {
      url: "/images/01.jpg",
      title: isEasyRead ? "Art Class" : "Creative Arts Workshop",
      category: 'activities'
    },
    {
      url: "/images/05.jpg",
      title: isEasyRead ? "Cooking Together" : "Cooking Skills Development",
      category: 'activities'
    },
    {
      url: "/images/06.jpg",
      title: isEasyRead ? "Computer Learning" : "Technology Training",
      category: 'activities'
    },
    {
      url: "/images/07.jpg",
      title: isEasyRead ? "Making Friends" : "Social Engagement",
      category: 'activities'
    },
    {
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      title: isEasyRead ? "Certificate Day" : "Achievement Ceremony",
      category: 'achievements'
    },
    {
      url: "/images/08.jpg",
      title: isEasyRead ? "Graduation" : "Skill Development Graduation",
      category: 'achievements'
    },
    {
      url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop",
      title: isEasyRead ? "Party Time" : "Community Celebration",
      category: 'events'
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      title: isEasyRead ? "Fun Day Out" : "Community Outing",
      category: 'events'
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      title: isEasyRead ? "Team Meeting" : "Group Discussion",
      category: 'activities'
    },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {isEasyRead ? "Photos and Videos" : "Gallery"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEasyRead
                ? "See what we do every day. Look at our fun activities and happy moments!"
                : "Explore our collection of photos and videos showcasing daily activities, achievements, and community events."}
            </p>
            <br></br>
            <br></br>
            <p> Timeline video of story book would be here maybe? </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id as typeof selectedCategory)}
                data-testid={`button-filter-${category.id}`}
              >
                {isEasyRead ? category.easyReadLabel : category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
                onClick={() => setLightboxImage({ url: item.url, title: item.title })}
                data-testid={`card-gallery-${index}`}
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      data-testid={`img-gallery-${index}`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Instagram Integration Placeholder */}
          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="bg-muted/50" data-testid="card-instagram-placeholder">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {isEasyRead ? "Follow Us on Instagram" : "Stay Connected"}
                </h3>
                <p className="text-muted-foreground">
                  {isEasyRead
                    ? "We will add Instagram photos here soon. You can see all our latest pictures!"
                    : "Future integration: Follow our Instagram feed for the latest updates, photos, and stories from Purple Patch Partners."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          data-testid="lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-lg"
              data-testid="img-lightbox"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {lightboxImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
