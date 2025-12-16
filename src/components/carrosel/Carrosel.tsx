import React, { useEffect, useState } from "react";
import "./CarroselStyles.css";

interface CarroselProps {
  children: React.ReactNode;
}

export const Carrosel: React.FC<CarroselProps> = ({ children }) => {
  const slides = React.Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  // RESPONSIVO
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

  // AUTOPLAY
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, maxIndex]);

  return (
    <div className="carrosel-containel">
      <div
        className="carrosel-slide"
        style={{ transform: `translateX(-${index * slideWidth}%)` }}
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

      {/* DOTS */}
      <div className="dots">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => {
              setIndex(i);
              setAutoplay(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};
