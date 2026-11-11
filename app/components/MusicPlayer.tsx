"use client";

import { useEffect, useRef, useState } from "react";
import Heart from "./Heart";

const SRC = "/music.mp3";
const VOLUME = 0.6;

type Gate = "checking" | "closed" | "opening" | "open";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [gate, setGate] = useState<Gate>("checking");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    // Try to autoplay straight away. If the browser allows it, skip the
    // opening screen; if it blocks sound, show the "open" button, whose tap
    // starts the music.
    audio
      .play()
      .then(() => setGate("open"))
      .catch(() => setGate("closed"));

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  // Lock page scroll while the opening screen is up.
  useEffect(() => {
    const locked = gate === "checking" || gate === "closed";
    document.documentElement.classList.toggle("is-gated", locked);
  }, [gate]);

  const openInvitation = () => {
    audioRef.current?.play().catch(() => {});
    setGate("opening");
    setTimeout(() => setGate("open"), 1100);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="auto" autoPlay />

      {gate !== "open" && (
        <div className={`gate is-${gate}`} role="dialog" aria-label="Taklifnoma">
          <div className="gate__inner">
            <p className="gate__eyebrow">To‘yga taklifnoma</p>
            <p className="gate__names">
              <span>Samandar</span>
              <Heart className="gate__heart" />
              <span>Mo‘mina</span>
            </p>
            <p className="gate__date">18 · 11 · 2026</p>
            <button type="button" className="gate__btn" onClick={openInvitation}>
              <Heart className="gate__btn-heart" />
              Taklifnomani ochish
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`music${playing ? " is-playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Musiqani to‘xtatish" : "Musiqani yoqish"}
        title={playing ? "Musiqani to‘xtatish" : "Musiqani yoqish"}
      >
        <span className="music__ring" aria-hidden="true" />
        {playing ? (
          <span className="music__bars" aria-hidden="true">
            <span /><span /><span /><span />
          </span>
        ) : (
          <svg className="music__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm11-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}
