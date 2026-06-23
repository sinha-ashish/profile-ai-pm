import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translation } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Translation;
};

const LanguageContext = createContext<Ctx | null>(null);

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "fr") return stored;
  } catch {}
  const nav = (navigator.language || (navigator as any).userLanguage || "en").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const toggle = () => setLang(lang === "en" ? "fr" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
