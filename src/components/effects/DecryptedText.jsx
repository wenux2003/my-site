import { useEffect, useRef, useState } from "react";

const DEFAULT_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=";

function getScrambledText(length, characters) {
  return Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }).join("");
}

function DecryptedText({
  text,
  speed = 35,
  maxIterations = 12,
  className = "",
  encryptedClassName = "",
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);
  const iterationRef = useRef(0);

  useEffect(() => {
    iterationRef.current = 0;
    setIsAnimating(true);

    const interval = window.setInterval(() => {
      iterationRef.current += 1;

      const progress = Math.min(1, iterationRef.current / maxIterations);
      const revealCount = Math.floor(text.length * progress);

      const revealed = text.slice(0, revealCount);
      const scrambled = getScrambledText(text.length - revealCount, DEFAULT_CHARACTERS);
      setDisplayText(revealed + scrambled);

      if (iterationRef.current >= maxIterations) {
        window.clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [maxIterations, speed, text]);

  return (
    <span className={isAnimating ? encryptedClassName || className : className}>
      {displayText}
    </span>
  );
}

export default DecryptedText;
