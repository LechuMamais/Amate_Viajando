import { useEffect, useState } from 'react';

export const useLocalizedContent = (localizedTexts) => {
  const [lang] = useState(() => (navigator.language || navigator.userLanguage).slice(0, 2));
  const [content, setContent] = useState({ heading: '', text: [] });

  useEffect(() => {
    if (localizedTexts[lang]) {
      setContent(localizedTexts[lang]);
    } else {
      setContent(localizedTexts['en']);
    }
  }, [lang, localizedTexts]);

  return content;
};
