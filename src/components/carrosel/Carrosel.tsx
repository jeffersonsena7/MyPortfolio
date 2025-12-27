import React, { useEffect, useRef, useState } from "react";
import "./CarroselStyles.css";

interface CarroselProps {
  children: React.ReactNode;
}

export const Carrosel: React.FC<CarroselProps> = ({ children }) => {
  const slides = React.Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const [startX, setStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width < 600) setVisible(1);
      else if (width < 900) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(slides.length - visible, 0);
  const slideWidth = 100 / visible;
  const totalDots = maxIndex + 1;

  // autoplay (BLOQUEADO SE VÍDEO ESTIVER TOCANDO)
  useEffect(() => {
    if (!autoplay || videoPlaying) return;

    const interval = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, maxIndex, videoPlaying]);

  // escuta vídeos (play / pause / ended)
  useEffect(() => {
    if (!containerRef.current) return;

    const videos = containerRef.current.querySelectorAll("video");

    const onPlay = () => {
      setVideoPlaying(true);
      setAutoplay(false);
    };

    const onStop = () => {
      setVideoPlaying(false);
      setAutoplay(true);
    };

    videos.forEach((video) => {
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onStop);
      video.addEventListener("ended", onStop);
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onStop);
        video.removeEventListener("ended", onStop);
      });
    };
  }, [children]);

  // swipe (BLOQUEADO SE VÍDEO ESTIVER TOCANDO)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (videoPlaying) return;
    if ((e.target as HTMLElement).closest("video")) return;

    setStartX(e.clientX);
    setAutoplay(false);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (videoPlaying || startX === null) return;

    const diff = startX - e.clientX;
    const threshold = 50;

    if (diff > threshold && index < maxIndex) {
      setIndex(index + 1);
    } else if (diff < -threshold && index > 0) {
      setIndex(index - 1);
    }

    setStartX(null);
  };

  return (
    <div
      ref={containerRef}
      className="carrosel-containel"
    >
      <div
        className="carrosel-slide"
        style={{ transform: `translateX(-${index * slideWidth}%)` }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {slides.map((slide, i) => (
          <div
            className="slide"
            key={i}
            style={{ flex: `0 0 ${slideWidth}%` }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* DOTS BLOQUEADOS DURANTE VÍDEO */}
      <div className="dots">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => {
              if (videoPlaying) return;
              setIndex(i);
              setAutoplay(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};
