"use client";

import React, { useState, useRef, useEffect } from "react";
import { executeCommand, WELCOME_MESSAGE } from "./commands";

type HistoryEntry = {
  type: "input" | "output";
  content: string;
  id: number;
};

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: "output", content: WELCOME_MESSAGE, id: 0 },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(1);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  // Focus input on container click
  const handleContainerClick = () => inputRef.current?.focus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add input to history
    setHistory((prev) => [
      ...prev,
      { type: "input", content: `> ${input}`, id: idCounter.current++ },
    ]);

    // Add to command history for up/down navigation
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Execute command
    const result = executeCommand(trimmed);

    if (result.action === "clear") {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "output", content: result.output, id: idCounter.current++ },
      ]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden cursor-text"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800/70 bg-neutral-900/50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-xs text-neutral-400 ml-2">
          rayyan@portfolio ~
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        className="h-64 overflow-y-auto p-4 font-mono text-sm"
      >
        {history.map((entry) => (
          <div
            key={entry.id}
            className={
              entry.type === "input"
                ? "text-emerald-400"
                : "text-neutral-200 whitespace-pre-wrap"
            }
          >
            {entry.content}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-1">
          <span className="text-emerald-400 mr-2">{">"}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white caret-emerald-400 font-mono"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
