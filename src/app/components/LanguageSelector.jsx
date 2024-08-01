'use client'
// components/LanguageSelector.js 
import React,{ useState} from 'react';

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
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return(
    <div className="language-selector">
      <h2>Selecciona un idioma</h2>
      <div className="language-list">
        {languages.map((language) => (
          <div
            key={language.code}
            className="language-card"
            onClick={() => onLanguageSelect(language.code)}
          >
            <div className="flag">{language.flag}</div>
            <div className="name">{language.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default LanguageSelector;