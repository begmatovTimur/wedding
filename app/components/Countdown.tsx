"use client";

import { useEffect, useState } from "react";

// 18-noyabr 2026, 18:00 Toshkent vaqti (UTC+5)
const TARGET = new Date("2026-11-18T18:00:00+05:00").getTime();

function diff(now: number) {
  const ms = Math.max(0, TARGET - now);
  return {
    kun: Math.floor(ms / 86_400_000),
    soat: Math.floor(ms / 3_600_000) % 24,
    daqiqa: Math.floor(ms / 60_000) % 60,
    soniya: Math.floor(ms / 1000) % 60,
  };
}

export default function Countdown() {
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setLeft(diff(Date.now()));
    const id = setInterval(() => setLeft(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  const units: [keyof ReturnType<typeof diff>, string][] = [
    ["kun", "kun"],
    ["soat", "soat"],
    ["daqiqa", "daqiqa"],
    ["soniya", "soniya"],
  ];

  return (
    <div className="countdown" aria-live="polite">
      {units.map(([key, label]) => (
        <div key={key} className="countdown__unit">
          <span className="countdown__num">
            {left ? String(left[key]).padStart(2, "0") : "--"}
          </span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
