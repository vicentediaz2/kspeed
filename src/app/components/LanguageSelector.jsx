'use client'
// components/LanguageSelector.js 
import React, { useState } from 'react';
import { connectToAI } from './API/api';
const languages = [
  { code: 'en', name: 'Inglés', flag: '🇬🇧' },
  { code: 'zh', name: 'Chino', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'Árabe', flag: '🇸🇦' },
  { code: 'pt', name: 'Portugués', flag: '🇵🇹' },
  { code: 'fr', name: 'Francés', flag: '🇫🇷' },
  { code: 'ja', name: 'Japonés', flag: '🇯🇵' },
  { code: 'ru', name: 'Ruso', flag: '🇷🇺' },
  { code: 'de', name: 'Alemán', flag: '🇩🇪' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'ko', name: 'Coreano', flag: '🇰🇷' },
  { code: 'id', name: 'Indonesio/Malayo', flag: '🇮🇩' },
];

function LanguageSelector({ onLanguageSelect }) {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handlePlayClick = () => {
    if (selectedLanguage) {
      const selectedLanguageInfo = languages.find(lang => lang.code === selectedLanguage);
      onLanguageSelect(selectedLanguage);
      connectToAI(selectedLanguageInfo);
    } else {
      alert('Por favor selecciona un idioma.');
    }
  };

  return (
    <div className="language-selector">
      <h2>Selecciona un idioma</h2>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="" disabled>Seleccione un idioma</option>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  );
};

export default LanguageSelector;