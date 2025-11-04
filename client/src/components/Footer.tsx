import { Link } from "wouter";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export function Footer() {
  const { isEasyRead } = useAccessibility();

  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            
<img
  src="/images/purplepatchlogo.png"
  alt="Purple Patch Partners logo with tagline"
  className="h-10 sm:h-12 object-contain"
/>


            <p className="text-sm text-muted-foreground">
              {isEasyRead
                ? "We help people with learning disabilities and autism to be happy and do well."
                : "Empowering individuals with learning disabilities and autism to reach their full potential."}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/PurplePatchPartners/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2"
                aria-label="Visit our Facebook page"
                data-testid="link-social-facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/PurplePatch_CiC"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2"
                aria-label="Visit our Twitter page"
                data-testid="link-social-twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/purplepatch_cic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2"
                aria-label="Visit our Instagram page"
                data-testid="link-social-instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">
              {isEasyRead ? "Quick Links" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-services">
                  {isEasyRead ? "What We Do" : "Our Services"}
                </Link>
              </li>
              <li>
                <Link href="/referrals" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-referrals">
                  {isEasyRead ? "Get Help" : "Make a Referral"}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-gallery">
                  {isEasyRead ? "Pictures" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-stories">
                  {isEasyRead ? "Happy Stories" : "Success Stories"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">
              {isEasyRead ? "Learn More" : "Information"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mission" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-mission">
                  {isEasyRead ? "Our Mission" : "Mission & Values"}
                </Link>
              </li>
              <li>
                <Link href="/info/learning-disabilities" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-learning-disabilities">
                  {isEasyRead ? "Learning Disabilities" : "About Learning Disabilities"}
                </Link>
              </li>
              <li>
                <Link href="/info/autism" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-autism">
                  {isEasyRead ? "About Autism" : "Understanding Autism"}
                </Link>
              </li>
              <li>
                <Link href="/info/send-support" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-send">
                  {isEasyRead ? "SEND Help" : "SEND Support"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">
              {isEasyRead ? "Contact Us" : "Contact"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">
                  Blackburn, Lancashire
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <a href="tel:01234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone">
                  01234 567890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:info@purplepatchpartners.co.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                  info@purplepatchpartners.co.uk
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              {isEasyRead ? "We are open Monday to Friday, 9am to 3pm" : "Open Monday - Friday, 9:00 AM - 3:00 PM"}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Purple Patch Partners. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">
                {isEasyRead ? "Privacy" : "Privacy Policy"}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-accessibility">
                {isEasyRead ? "Accessibility" : "Accessibility Statement"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
