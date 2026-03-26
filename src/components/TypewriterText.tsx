"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isActiveRef = useRef(true);

  const typeChar = useCallback(() => {
    if (!isActiveRef.current) return;

    if (indexRef.current < text.length) {
      setDisplayedText(text.slice(0, indexRef.current + 1));
      indexRef.current++;

      // Variable speed for more natural feel
      const variance = Math.random() * 20 - 10;
      const nextSpeed =
        text[indexRef.current - 1] === " " ? speed * 0.5 : speed + variance;

      timeoutRef.current = setTimeout(typeChar, nextSpeed);
    } else {
      setIsTyping(false);
      onComplete?.();
    }
  }, [text, speed, onComplete]);

  useEffect(() => {
    // Reset state on mount/remount
    isActiveRef.current = true;
    indexRef.current = 0;
    setDisplayedText("");
    setIsTyping(false);

    const startTimeout = setTimeout(() => {
      if (!isActiveRef.current) return;
      setIsTyping(true);
      typeChar();
    }, delay);

    // Cleanup on unmount
    return () => {
      isActiveRef.current = false;
      clearTimeout(startTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, delay, typeChar]);

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
