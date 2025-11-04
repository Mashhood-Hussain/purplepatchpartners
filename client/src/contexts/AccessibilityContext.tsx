import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AccessibilityContextType {
  isEasyRead: boolean;
  toggleEasyRead: () => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  textSize: 'normal' | 'large';
  toggleTextSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [isEasyRead, setIsEasyRead] = useState(() => {
    const saved = localStorage.getItem("easyReadMode");
    return saved === "true";
  });

  const [isHighContrast, setIsHighContrast] = useState(() => {
    const saved = localStorage.getItem("highContrastMode");
    return saved === "true";
  });

  const [textSize, setTextSize] = useState<'normal' | 'large'>(() => {
    const saved = localStorage.getItem("textSize");
    return (saved as 'normal' | 'large') || 'normal';
  });

  // Easy Read Mode
  useEffect(() => {
    localStorage.setItem("easyReadMode", isEasyRead.toString());
    document.documentElement.classList.toggle("easy-read-mode", isEasyRead);
  }, [isEasyRead]);

  // High Contrast Mode
  useEffect(() => {
    localStorage.setItem("highContrastMode", isHighContrast.toString());
    document.documentElement.classList.toggle("high-contrast-mode", isHighContrast);
  }, [isHighContrast]);

  // Large Text Mode
  useEffect(() => {
    localStorage.setItem("textSize", textSize);
    document.documentElement.classList.toggle("large-text-mode", textSize === 'large');
  }, [textSize]);

  const toggleEasyRead = () => setIsEasyRead(prev => !prev);
  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  const toggleTextSize = () => setTextSize(prev => prev === 'normal' ? 'large' : 'normal');

  return (
    <AccessibilityContext.Provider
      value={{
        isEasyRead,
        toggleEasyRead,
        isHighContrast,
        toggleHighContrast,
        textSize,
        toggleTextSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
