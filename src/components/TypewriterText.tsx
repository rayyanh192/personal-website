"use client";

import React, { useState, useEffect, useRef } from "react";

type Props = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
  cursorChar?: string;
};

export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  className = "",
  onComplete,
  cursor = true,
  cursorChar = "▊",
}: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTimeout = setTimeout(() => {
      setIsTyping(true);

      const typeChar = () => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current++;

          // Variable speed for more natural feel
          const variance = Math.random() * 20 - 10;
          const nextSpeed =
            text[indexRef.current - 1] === " " ? speed * 0.5 : speed + variance;

          setTimeout(typeChar, nextSpeed);
        } else {
          setIsTyping(false);
          onComplete?.();
        }
      };

      typeChar();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return;

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span
          className={`transition-opacity duration-100 ${
            showCursor ? "opacity-100" : "opacity-0"
          } ${!isTyping && !showCursor ? "hidden" : ""}`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
