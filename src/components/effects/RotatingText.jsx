import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RotatingText = forwardRef(function RotatingText(
  {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2200,
    staggerDuration = 0.025,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
  },
  ref,
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment) => segment.segment);
    }

    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === "characters") {
      return currentText.split(" ").map((word, index, array) => ({
        characters: splitIntoCharacters(word),
        needsSpace: index !== array.length - 1,
      }));
    }

    return currentText.split(" ").map((word, index, array) => ({
      characters: [word],
      needsSpace: index !== array.length - 1,
    }));
  }, [currentTextIndex, splitBy, texts]);

  const getStaggerDelay = useCallback(
    (index, totalChars) => {
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (totalChars - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(totalChars / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      return index * staggerDuration;
    },
    [staggerDuration, staggerFrom],
  );

  const next = useCallback(() => {
    setCurrentTextIndex((currentIndex) => {
      if (currentIndex === texts.length - 1) {
        return loop ? 0 : currentIndex;
      }
      return currentIndex + 1;
    });
  }, [loop, texts.length]);

  useImperativeHandle(ref, () => ({ next }));

  useEffect(() => {
    if (!auto) {
      return undefined;
    }

    const interval = window.setInterval(next, rotationInterval);
    return () => window.clearInterval(interval);
  }, [auto, next, rotationInterval]);

  return (
    <motion.span className={cn("text-rotate", mainClassName)} layout transition={transition}>
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence initial={animatePresenceInitial} mode={animatePresenceMode}>
        <motion.span key={currentTextIndex} aria-hidden="true" className="flex flex-wrap">
          {elements.map((word, wordIndex, words) => {
            const previousCharsCount = words
              .slice(0, wordIndex)
              .reduce((sum, currentWord) => sum + currentWord.characters.length, 0);

            const totalChars = words.reduce((sum, currentWord) => sum + currentWord.characters.length, 0);

            return (
              <span className={cn("inline-flex", splitLevelClassName)} key={`${wordIndex}-${texts[currentTextIndex]}`}>
                {word.characters.map((character, charIndex) => (
                  <motion.span
                    animate={animate}
                    className={cn("inline-block", elementLevelClassName)}
                    exit={exit}
                    initial={initial}
                    key={`${character}-${charIndex}`}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(previousCharsCount + charIndex, totalChars),
                    }}
                  >
                    {character}
                  </motion.span>
                ))}
                {word.needsSpace ? <span className="whitespace-pre"> </span> : null}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

export default RotatingText;
