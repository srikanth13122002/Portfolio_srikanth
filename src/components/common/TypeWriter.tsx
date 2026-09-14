import React, { useEffect, useState } from 'react';

interface TypeWriterProps {
  words: string[];
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ words, className = '' }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-blue-500">|</span>
    </span>
  );
};

export default TypeWriter;
