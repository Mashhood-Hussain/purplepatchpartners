import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye, Type } from "lucide-react";
import { useState } from "react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(null);

  const {
    isEasyRead,
    toggleEasyRead,
    isHighContrast,
    toggleHighContrast,
    textSize,
    toggleTextSize,
  } = useAccessibility();

  const navigationItems = [
    { path: "/", label: "Home", easyReadLabel: "Home" },
    { path: "/services", label: "Our Offer", easyReadLabel: "What We Do" },
    { path: "/mission", label: "Ethos & Values", easyReadLabel: "Our Mission" },
    { path: "/stories", label: "Success Stories", easyReadLabel: "Happy Stories" },
    { path: "/gallery", label: "Gallery", easyReadLabel: "Photos & Videos" },

    {
      path: "/team",
      label: "Our Team",
      easyReadLabel: "Meet the Team",
      isDropdown: true,
      items: [
        {
          path: "/vacancies",
          label: "Vacancies",
          easyReadLabel: "Job Vacancies",
        },
      ],
    },

    { path: "/news", label: "News", easyReadLabel: "Updates" },
    { path: "/contact", label: "Contact Us", easyReadLabel: "Contact" },
  ];

  return (
    <>
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
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
                aria-label="Toggle High Contrast mode"
                className="gap-2"
              >
                <svg className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="hidden sm:inline">High Contrast</span>
              </Button>

              <Button
                variant={textSize === "large" ? "default" : "ghost"}
                size="sm"
                onClick={toggleTextSize}
                aria-label="Toggle large text size"
                className="gap-2"
              >
                <Type className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Large Text</span>
              </Button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <img
                src="/images/purplepatchlogo.png"
                alt="Purple Patch Partners logo"
                className="h-10 sm:h-12 object-contain -ml-8"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 -ml-14" aria-label="Main navigation">
              {navigationItems.map((item, idx) =>
                item.isDropdown ? (
                  <div key={idx} className="relative flex items-center gap-1">
                    
                    {/* MAIN LINK */}
                    <Link
                      href={item.path}
                      className={`text-xl font-medium transition-colors hover:text-primary ${
                        location === item.path ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {isEasyRead ? item.easyReadLabel : item.label}
                    </Link>

                    {/* DESKTOP CARET */}
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === idx ? null : idx)}
                      className="text-foreground hover:text-primary transition translate-y-[2px]"
                    >
                      {dropdownOpen === idx ? "▾" : "▸"}
                    </button>

                    {/* SUBMENU */}
                    {dropdownOpen === idx && (
                      <div className="absolute left-0 top-full mt-2 flex flex-col bg-white border shadow-lg rounded-md w-48 z-50">
                        {item.items.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.path}
                            className={`px-4 py-2 hover:bg-primary/10 ${
                              location === sub.path
                                ? "text-primary font-semibold"
                                : "text-foreground"
                            }`}
                          >
                            {isEasyRead ? sub.easyReadLabel : sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.path}
                    className={`text-xl font-medium transition-colors hover:text-primary ${
                      location === item.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {isEasyRead ? item.easyReadLabel : item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Side (Refer + Mobile Toggle) */}
            <div className="flex items-center gap-3">
              <Link href="/referrals" className="hidden md:inline-block">
                <Button size="default">
                  {isEasyRead ? "Get Help" : "Refer Someone"}
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background relative z-20">
            <div className="container mx-auto px-2 py-4 space-y-1">

             {navigationItems.map((item, idx) =>
  item.isDropdown ? (
    <div key={idx} className="w-full">

      {/* TOP ROW: MAIN LINK + TOGGLE BUTTON */}
      <div className="flex items-center justify-between">
        
        {/* MAIN LINK */}
        <Link
          href={item.path}
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex-1 px-4 py-3 text-base font-medium rounded-md hover:bg-primary/10 text-left"
        >
          {isEasyRead ? item.easyReadLabel : item.label}
        </Link>

        {/* DROPDOWN TOGGLE */}
        <button
          onClick={() =>
            setMobileDropdownOpen(mobileDropdownOpen === idx ? null : idx)
          }
          className="px-3 py-3"
        >
          {mobileDropdownOpen === idx ? "▾" : "▸"}
        </button>
      </div>

      {/* SUBMENU */}
      {mobileDropdownOpen === idx && (
        <div className="space-y-1 pl-6 mt-1">
          {item.items.map((sub, i) => (
            <Link
              key={i}
              href={sub.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                variant={location === sub.path ? "default" : "ghost"}
                className="w-full justify-start text-base"
              >
                {isEasyRead ? sub.easyReadLabel : sub.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  ) : (
    <Link key={idx} href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
      <Button
        variant={location === item.path ? "default" : "ghost"}
        className="w-full justify-start text-base"
      >
        {isEasyRead ? item.easyReadLabel : item.label}
      </Button>
    </Link>
  )
)}


              {/* Refer Button */}
              <Link href="/referrals" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full" size="lg">
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
