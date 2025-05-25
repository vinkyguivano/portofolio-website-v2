'use client'

import { useState } from "react";

const DEFAULT_LANGUAGE = "EN";

export default function LanguageToggle() {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "EN" ? "ID" : "EN"));
  };

  const isEnglish = language === 'EN';

  return (
    <div className="flex items-center space-x-2">
      <span className="font-semibold text-sm text-gray-300">EN</span>
      <div
        className="w-[76px] h-10 border-2 border-[#585858] rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 relative"
        onClick={toggleLanguage}
      >
        <div
          className={`w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
            isEnglish ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={isEnglish ? '/uk-flag.png' : 'id-flag.png'}
            alt="Flag"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <span className="font-semibold text-sm text-gray-300">ID</span>
    </div>
  );
}
