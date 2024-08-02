'use client'

import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import TypingGame from './components/TypingGame';


const App = () => {
  const [aiResponse, setAIResponse] = useState(null);

  return (
    <div>
      {!aiResponse ? (
        <LanguageSelector onLanguageSelect={setAIResponse} />
      ) : (
        <TypingGame languageResponse={aiResponse} />
      )}
    </div>
  );
};

export default App;