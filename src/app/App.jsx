'use client'

import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import TypingGame from './components/TypingGame';


const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div>
      {!selectedLanguage ? (
        <LanguageSelector onLanguageSelect={setSelectedLanguage} />
      ) : (
        <TypingGame language={selectedLanguage} />
      )}
    </div>
  );
};

export default App;