"use client";

import { useEffect, useRef, useState } from "react";

// Label shown when hovering an element with a matching data-cursor value.
const LABELS: Record<string, string> = {
  project: "READ",
  email: "EMAIL",
};

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on devices with a real pointer, and respect reduced motion.
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    document.body.classList.add("cursor-none");

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const key = el?.getAttribute("data-cursor") ?? "";
      setLabel(LABELS[key] ?? "");

      if (frame.current === null) {
        frame.current = requestAnimationFrame(() => {
          setPos(target.current);
          frame.current = null;
        });
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  if (!visible) return null;

  const expanded = label.length > 0;

  return (
    <div
      aria-hidden
      className="fixed pointer-events-none z-[9999] flex items-center"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translateY(-50%)",
      }}
    >
      <div
        className="flex items-center justify-start rounded-full bg-primary text-white font-mono text-[13px] select-none whitespace-nowrap overflow-hidden"
        style={{
          width: expanded ? "auto" : 16,
          height: expanded ? 28 : 16,
          padding: expanded ? "0 12px" : 0,
          transform: expanded ? "scale(1)" : "scale(0.75)",
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, padding 0.2s ease-out, transform 0.15s ease-out",
        }}
      >
        <span
          style={{
            opacity: expanded ? 1 : 0,
            transition: "opacity 0.2s ease-out",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
