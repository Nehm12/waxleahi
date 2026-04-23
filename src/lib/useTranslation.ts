"use client";

import { useEffect, useState } from "react";
import { Language, getTranslation } from "./translations";

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  // Charger la langue depuis localStorage au montage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  // Sauvegarder la langue dans localStorage
  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return {
    language,
    switchLanguage,
    t,
    mounted,
  };
};
