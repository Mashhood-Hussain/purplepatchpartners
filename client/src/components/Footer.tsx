import { Link } from "wouter";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export function Footer() {
  const { isEasyRead } = useAccessibility();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
{/* Column 1 */}
<div className="space-y-4">
  <div className="flex flex-col items-start space-y-6 mt-2"> 
    <div className="flex flex-row items-center justify-start space-x-6 -mt-4 -ml-2">
      <img
        src="/images/Winner Logo BMA 2020-01.jpg"
        alt="Winner of BMA Award 2020"
        className="w-28 h-auto rounded-lg shadow-lg"
      />
      <img
        src="/images/committed_small.png"
        alt="Committed to excellent care badge"
        className="w-28 h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>

<br></br>
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
                className="hover-elevate active-elevate-2 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Visit our Facebook page"
                data-testid="link-social-facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </a>

              <a
                href="https://x.com/PurplePatch_CiC"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Visit our Twitter page"
                data-testid="link-social-twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </a>

              <a
                href="https://instagram.com/purplepatch_cic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Visit our Instagram page"
                data-testid="link-social-instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "What We Do" : "Our Services"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "Talk To Us" : "Contact Us"}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "Pictures" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "Happy Stories" : "Success Stories"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">
              {isEasyRead ? "Learn More" : "Information"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mission" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "Our Mission" : "Ethos & Values"}
                </Link>
              </li>
              <li>
                <Link to="/info/learning-disabilities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "Learning Disabilities" : "About Learning Disabilities"}
                </Link>
              </li>
              <li>
                <Link to="/info/autism" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "About Autism" : "Understanding Autism"}
                </Link>
              </li>
              <li>
                <Link to="/info/send-support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {isEasyRead ? "SEND Help" : "SEND Support"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">
              {isEasyRead ? "Contact Us" : "Contact"}
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Blackburn, Lancashire</span>
              </li>

              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:+441234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  01234 567890
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@purplepatchpartners.co.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@purplepatchpartners.co.uk
                </a>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground">
              {isEasyRead ? "We are open Monday to Friday, 9am to 3pm" : "Open Monday - Friday, 9:00 AM - 3:00 PM"}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {year} Purple Patch Partners. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {isEasyRead ? "Privacy" : "Privacy Policy"}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {isEasyRead ? "Accessibility" : "Accessibility Statement"}
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
