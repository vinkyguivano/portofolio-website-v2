'use client'

import { createContext, useContext, useState, useCallback } from "react";
import locales from '../const/locales';

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }: { children: React.ReactNode}) => {
  const [language, setLanguage ] = useState('EN');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === "EN" ? "ID" : "EN"));
    document.querySelector("html")?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const t = useCallback((key: string) => {
    const lang = locales[language as keyof typeof locales]
    return lang[key as keyof typeof lang] || key;
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider >
  )
}

export const useLanguage = () => useContext(LanguageContext)


export interface ILanguage {
  language: string,
  toggleLanguage: () => undefined,
  t: (key: string) => string
}