import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

function ScrambleText({ text, as: Tag = "span", className = "", speed = 50 }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(null);
  const queueRef = useRef([]);
  const frameCountRef = useRef(0);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const oldText = display;
    const length = Math.max(oldText.length, text.length);
    const queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    queueRef.current = queue;
    frameCountRef.current = 0;
    lastUpdateRef.current = performance.now();
    cancelAnimationFrame(frameRef.current);

    const update = (now) => {
      const elapsed = now - lastUpdateRef.current;

      if (elapsed < speed) {
        frameRef.current = requestAnimationFrame(update);
        return;
      }

      lastUpdateRef.current = now;

      let output = "";
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];

        if (frameCountRef.current >= end) {
          complete++;
          output += to;
        } else if (frameCountRef.current >= start) {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          output += from;
        }
      }

      setDisplay(output);

      if (complete === queueRef.current.length) {
        return;
      }

      frameCountRef.current++;
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <Tag className={className}>{display}</Tag>;
}

export default ScrambleText;
