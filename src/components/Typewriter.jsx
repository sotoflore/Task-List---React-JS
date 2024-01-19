import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + currentWord[currentIndex]);
      currentIndex += 1;

      if (currentIndex === currentWord.length) {
        clearInterval(interval);

        setTimeout(() => {
          // Clear the word after a delay
          setDisplayedText('');
          // Move to the next word
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000); // Adjust the delay as needed
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, words, speed]);

  return <span className='span'>{displayedText}</span>;
};

export default Typewriter;
