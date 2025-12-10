import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { X } from "lucide-react";

export default function Gallery() {
  const { isEasyRead } = useAccessibility();



  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Categories for filters
  const categories = [
    { id: "all", label: "All", easyReadLabel: "Everything" },
    { id: "social", label: "Social Interaction", easyReadLabel: "Talking with People" },
    { id: "health", label: "Health", easyReadLabel: "Staying Healthy" },
    { id: "learning", label: "Learning", easyReadLabel: "Learning New Things" },
    { id: "culture", label: "Culture", easyReadLabel: "Making Friends" },
    { id: "relax", label: "Relaxation", easyReadLabel: "Relaxing" },
    { id: "outing", label: "Outings", easyReadLabel: "Fun Day Out" },
  ];

  // Main gallery category items
const galleryCategories = [
  /* -------------------------------------------------
   * SOCIAL INTERACTION
   * ------------------------------------------------- */
  {
    title: isEasyRead ? "Talking with People" : "Social Interaction",
    cover: "/images/cricketpic1.jpg",
    category: "social",
    images: [
      "/images/cricketpic1.jpg",
      "/images/archiesgrouppicture.jpeg",
      "/images/playingludogamepic.jpg",
      "/images/playingpuzzlegame.jpg",
      "/images/playingbowlingpic.jpg",
      "/images/playingbowlingpic2.jpg",
      "/images/sharingpic.jpg",
      "/images/wheelchairwomenpic.jpg",
    ],
  },

  /* -------------------------------------------------
   * HEALTH & WELLBEING
   * ------------------------------------------------- */
  {
    title: isEasyRead ? "Staying Healthy" : "Health and Wellbeing",
    cover: "/images/05.jpg",
    category: "health",
    images: [
      "/images/05.jpg",
      "/images/archerypic1.jpg",
      "/images/footballpic1.jpg",
      "/images/wheelchairbasketballpic.jpg",
      "/images/wheelchairbasketballpic2.jpg",
      "/images/gardeningpic3.jpg",
      "/images/cleaningleavesfromtheroadpic.jpg",
      "/images/ridingtricyclepic.jpg",
      "/images/sensoryplaypic1.jpg",
    ],
  },

  /* -------------------------------------------------
   * LEARNING & DEVELOPMENT
   * ------------------------------------------------- */
  {
    title: isEasyRead ? "Learning New Things" : "Learning and Development",
    cover: "/images/learningpic1.jpg",
    category: "learning",
    images: [
      "/images/learningpic1.jpg",
      "/images/nasheedproductionpic1.jpg",
      "/images/artsandcraftpic4outside.jpg",
      "/images/prayermatdrawingartscraft.jpg",
      "/images/purplepatchkeychainsmadeinartsandcraft.jpg",
      "/images/woodsandcraftoutsidepic.jpg",
      "/images/woodsandcraftoutsidepic2.jpg",
      "/images/craftprojectcoursecertificatepic2.jpg",
      "/images/craftprojectcoursecertificatepic3.jpg",
      "/images/certificateforindoorskydiving.jpg",
      "/images/cookingpic1.jpg",
      "/images/cookingpic3.jpg",
      "/images/cookingpic4.jpg",
    ],
  },

  /* -------------------------------------------------
   * CULTURAL COMMUNITY
   * ------------------------------------------------- */
  {
    title: isEasyRead ? "Making Friends" : "Cultural Community",
    cover: "/images/07.jpg",
    category: "culture",
    images: [
      "/images/07.jpg",
      "/images/britaininbloomnorthwestawardceremony.jpeg",
      "/images/sellingitemstoraisemoneyforcharitypic.jpeg",
      "/images/cathedralgardenmanchester.jpg",
      "/images/promotingpurplepatchpic.jpg",
      "/images/christmasmancostumepic.jpg",
      "/images/scoutspic1.jpg",
    ],
  },

  /* -------------------------------------------------
   * RELAXATION & LEISURE
   * ------------------------------------------------- */
  {
    title: isEasyRead ? "Relaxing" : "Relaxation & Leisure",
    cover: "/images/blackpoolbeachpic2.jpg",
    category: "relax",
    images: [
      "/images/blackpoolbeachpic2.jpg",
      "/images/blackpoolbeachpic1.jpg",
    ],
  },

  /* -------------------------------------------------
   * COMMUNITY OUTING
   * ------------------------------------------------- */
  {
    title: isEasyRead ? "Fun Day Out" : "Community Outing",
    cover: "/images/skydivinggrouppic.jpg",
    category: "outing",
    images: [
      "/images/skydivinggrouppic.jpg",
      "/images/skydivinggrouppic2.jpg",
      "/images/flyingmanindoorskydivingpic2.jpg",
      "/images/goingtoalpacafarmpic.jpg",
      "/images/goingtoalpacafarmpic2.jpg",
      "/images/alpacafarmpic3.jpg",
      "/images/highlandcowpic2.jpg",
      "/images/meetinghighlandcowpic.jpg",
      "/images/diggingsandpic.jpg",
    ],
  },
];




  // Filter by category
  const filteredItems =
    selectedCategory === "all"
      ? galleryCategories
      : galleryCategories.filter((item) => item.category === selectedCategory);

  // Next/Prev navigation inside galleryCategories[x].images[y]
  const openNext = () => {
    if (lightboxIndex === null) return;
    const images = filteredItems[lightboxIndex].images;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const openPrev = () => {
    if (lightboxIndex === null) return;
    const images = filteredItems[lightboxIndex].images;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") openNext();
      if (e.key === "ArrowLeft") openPrev();
      if (e.key === "Escape") setLightboxIndex(null);
    };




    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <div className="flex flex-col">

      {/* ======= Hero Section ======= */}
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


          
          </div>
        </div>
      </section>

      {/* ======= Gallery Section ======= */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {isEasyRead ? category.easyReadLabel : category.label}
              </Button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
                onClick={() => {
                  setLightboxIndex(index);
                  setCurrentImageIndex(0);
                }}
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"







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



        </div>
      </section>

      {/* ======= Lightbox ======= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}






          aria-modal="true"
          role="dialog"
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(null)}
          >






            <X className="h-6 w-6" />
          </Button>

          {/* Prev Arrow */}
          <button
            className="absolute left-4 text-white text-4xl px-4 py-2 hover:bg-white/20 rounded"
            onClick={(e) => {
              e.stopPropagation();
              openPrev();
            }}
          >






            ‹
          </button>

          {/* Lightbox Image */}
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].images[currentImageIndex]}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[80vh] max-w-[80vw] object-contain mx-auto rounded-lg"
            />






            <p className="text-white text-center mt-4 text-lg font-medium">
              {filteredItems[lightboxIndex].title}
            </p>
          </div>

          {/* Next Arrow */}
          <button
            className="absolute right-4 text-white text-4xl px-4 py-2 hover:bg-white/20 rounded"
            onClick={(e) => {
              e.stopPropagation();
              openNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
