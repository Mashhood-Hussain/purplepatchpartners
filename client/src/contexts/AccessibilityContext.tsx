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

  useEffect(() => {
    localStorage.setItem("easyReadMode", isEasyRead.toString());
    if (isEasyRead) {
      document.documentElement.classList.add("easy-read-mode");
    } else {
      document.documentElement.classList.remove("easy-read-mode");
    }
  }, [isEasyRead]);

  useEffect(() => {
    localStorage.setItem("highContrastMode", isHighContrast.toString());
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast-mode");
    } else {
      document.documentElement.classList.remove("high-contrast-mode");
    }
  }, [isHighContrast]);

  useEffect(() => {
    localStorage.setItem("textSize", textSize);
    if (textSize === 'large') {
      document.documentElement.classList.add("large-text-mode");
    } else {
      document.documentElement.classList.remove("large-text-mode");
    }
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
