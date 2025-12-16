import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye, Type, Contrast } from "lucide-react";
import { useState } from "react";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { ChevronDown } from "lucide-react";


export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isEasyRead, toggleEasyRead, isHighContrast, toggleHighContrast, textSize, toggleTextSize } =
    useAccessibility();

  const navigationItems = [
    { path: "/", label: "Home", easyReadLabel: "Home" },
    { path: "/services", label: "Our Offer", easyReadLabel: "What We Do" },

    // ABOUT US (NON CLICKABLE)
    {
      label: "About Us",
      easyReadLabel: "Who We Are",
      isHoverDropdown: true,
      items: [
        { path: "/team", label: "Our Team", easyReadLabel: "Meet the Team" },
        { path: "/mission", label: "Ethos & Values", easyReadLabel: "Our Mission" },
      ],
    },

    { path: "/stories", label: "Success Stories", easyReadLabel: "Happy Stories" },
    { path: "/gallery", label: "Gallery", easyReadLabel: "Photos" },

    // GETTING INVOLVED (NON CLICKABLE)
    {
      label: "Get Involved",
      easyReadLabel: "How You Can Help",
      isHoverDropdown: true,
      items: [
        { path: "/vacancies", label: "Vacancies", easyReadLabel: "Job Vacancies" },
        { path: "/donate", label: "Donate", easyReadLabel: "Donate" },
      ],
    },

    { path: "/news", label: "News", easyReadLabel: "Updates" },
    { path: "/contact", label: "Contact Us", easyReadLabel: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8">

        {/* ACCESSIBILITY BAR */}
<div className="grid gap-2 border-b py-2 accessibility-bar sm:flex sm:justify-end">

          <Button size="sm" variant={isEasyRead ? "default" : "ghost"} onClick={toggleEasyRead}>
            <Eye className="h-4 w-4 mr-1" /> Easy Read
          </Button>
<Button
  size="sm"
  variant={isHighContrast ? "default" : "ghost"}
  onClick={toggleHighContrast}
>
  <Contrast className="h-4 w-4 mr-1" />
  High Contrast
</Button>


          <Button size="sm" variant={textSize === "large" ? "default" : "ghost"} onClick={toggleTextSize}>
            <Type className="h-4 w-4 mr-1" /> Large Text
          </Button>
        </div>

        {/* MAIN NAV */}
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center px-2">
            <img
              src="/images/purplepatchlogo.png"
              alt="Purple Patch Partners logo"
              className="h-12 object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
  <nav
  aria-label="Main navigation"
  className="hidden lg:flex items-center gap-8 main-nav"
>
  {navigationItems.map((item, idx) => {
    // 🔹 HOVER DROPDOWN (NOT CLICKABLE)
    if (item.isHoverDropdown) {
      return (
          <div key={idx} className="relative group flex items-center">
<span className="cursor-default text-xl font-medium text-foreground leading-none flex items-center gap-1">
  {isEasyRead ? item.easyReadLabel : item.label}
  <ChevronDown
    className="h-4 w-4 opacity-70 translate-y-[1px] group-hover:rotate-180 transition-transform duration-200"
    aria-hidden="true"
  />
</span>


          <div
            className="
              absolute left-0 top-full mt-3
              w-52 rounded-md border bg-white shadow-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
            "
          >
            {item.items.map((sub, i) => (
              <Link
                key={i}
                href={sub.path} // ✅ ALWAYS a string
                className="block px-4 py-3 text-sm hover:bg-primary/10 whitespace-nowrap"
              >
                {isEasyRead ? sub.easyReadLabel : sub.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    // 🔹 NORMAL CLICKABLE LINK
    return (
      <Link
        key={idx}
        href={item.path!} // ✅ safe because this branch only runs when path exists
        className={`text-xl font-medium transition-colors hover:text-primary ${
          location === item.path ? "text-primary" : "text-foreground"
        }`}
      >
        {isEasyRead ? item.easyReadLabel : item.label}
      </Link>
    );
  })}
</nav>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link href="/referrals" className="hidden md:inline-block">
              <Button>{isEasyRead ? "Get Help" : "Refer Someone"}</Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
{isMobileMenuOpen && (
  <div className="lg:hidden border-t border-border bg-background relative z-20">
    <div className="container mx-auto px-2 py-4 space-y-1">
      {navigationItems.map((item, idx) => {
        // 🔹 DESKTOP HOVER DROPDOWNS → EXPANDED SECTIONS ON MOBILE
        if (item.isHoverDropdown) {
          return (
            <div key={idx} className="space-y-1">
              {/* SECTION LABEL */}
              <div className="px-4 pt-3 text-sm font-semibold text-muted-foreground">
                {isEasyRead ? item.easyReadLabel : item.label}
              </div>

              {/* CHILD LINKS */}
              <div className="pl-6 space-y-1">
                {item.items.map((sub, i) => (
                  <Link
                    key={i}
                    href={sub.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={location === sub.path ? "default" : "ghost"}
                      className="w-full justify-start text-sm"
                    >
                      {isEasyRead ? sub.easyReadLabel : sub.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        // 🔹 NORMAL LINKS
        return (
          <Link
            key={idx}
            href={item.path!}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button
              variant={location === item.path ? "default" : "ghost"}
              className="w-full justify-start text-sm"
            >
              {isEasyRead ? item.easyReadLabel : item.label}
            </Button>
          </Link>
        );
      })}

      {/* REFER BUTTON */}
      <div className="pt-4">
        <Link href="/referrals" onClick={() => setIsMobileMenuOpen(false)}>
          <Button className="w-full" size="lg">
            {isEasyRead ? "Get Help" : "Refer Someone"}
          </Button>
        </Link>
      </div>
    </div>
  </div>
)}

    </header>
  );
}
