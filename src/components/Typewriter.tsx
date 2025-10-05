"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  speed = 80,
  loop = false,
}: {
  words: string[];
  speed?: number;
  loop?: boolean;
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= words.length) {
      if (loop) setWordIndex(0);
      else return;
    }

    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setText(words[wordIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setWordIndex(wordIndex + 1);
        setCharIndex(0);
        setText("");
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex, words, loop, speed]);

  return (
    <span className="typing-caret">
      {text}
    </span>
  );
}
