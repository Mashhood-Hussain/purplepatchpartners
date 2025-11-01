import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Eye, Type } from "lucide-react";
import { useState } from "react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isEasyRead, toggleEasyRead, isHighContrast, toggleHighContrast, textSize, toggleTextSize } = useAccessibility();

  const navigationItems = [
    { path: "/", label: "Home", easyReadLabel: "Home" },
    { path: "/mission", label: "Mission & Values", easyReadLabel: "Our Mission" },
    { path: "/services", label: "What We Offer", easyReadLabel: "What We Do" },
    { path: "/referrals", label: "Referrals", easyReadLabel: "Get Support" },
    { path: "/gallery", label: "Gallery", easyReadLabel: "Photos & Videos" },
    { path: "/stories", label: "Success Stories", easyReadLabel: "Happy Stories" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        data-testid="link-skip-to-content"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Accessibility Toolbar */}
          <div className="border-b border-border py-2">
            <div className="flex items-center justify-end gap-2">
              <Button
                variant={isEasyRead ? "default" : "ghost"}
                size="sm"
                onClick={toggleEasyRead}
                data-testid="button-toggle-easy-read"
                aria-pressed={isEasyRead}
                aria-label="Toggle Easy Read mode"
                className="gap-2"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Easy Read</span>
              </Button>
              <Button
                variant={isHighContrast ? "default" : "ghost"}
                size="sm"
                onClick={toggleHighContrast}
                data-testid="button-toggle-high-contrast"
                aria-pressed={isHighContrast}
                aria-label="Toggle High Contrast mode"
                className="gap-2"
              >
                <svg className="h-4 w-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="hidden sm:inline">High Contrast</span>
              </Button>
              <Button
                variant={textSize === 'large' ? "default" : "ghost"}
                size="sm"
                onClick={toggleTextSize}
                data-testid="button-toggle-text-size"
                aria-pressed={textSize === 'large'}
                aria-label="Toggle large text size"
                className="gap-2"
              >
                <Type className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Large Text</span>
              </Button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-home-logo">
              <Heart className="h-8 w-8 text-primary" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-foreground">
                  {isEasyRead ? "Purple Patch" : "Purple Patch Partners"}
                </span>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  {isEasyRead ? "Helping People Shine" : "Supporting People with Learning Disabilities"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? "text-primary" : "text-foreground"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {isEasyRead ? item.easyReadLabel : item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/referrals" className="hidden md:inline-block">
                <Button size="default" data-testid="button-refer-someone">
                  {isEasyRead ? "Get Help" : "Refer Someone"}
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                data-testid="button-mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background" role="navigation" aria-label="Mobile navigation">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant={location === item.path ? "default" : "ghost"}
                    className="w-full justify-start text-base"
                    data-testid={`button-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {isEasyRead ? item.easyReadLabel : item.label}
                  </Button>
                </Link>
              ))}
              <Link href="/referrals" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full" size="lg" data-testid="button-mobile-refer">
                  {isEasyRead ? "Get Help" : "Refer Someone"}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
