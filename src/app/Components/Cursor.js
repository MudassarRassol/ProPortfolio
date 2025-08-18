import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ size = 8, active = true, theme = "light" }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const circle = circleRef.current;
    if (!circle) return;

    const moveCircle = (e) => {
      const circleSize = circle.offsetWidth / 2;

      gsap.to(circle, {
        x: e.clientX - circleSize,
        y: e.clientY - circleSize,
        duration: 0.25,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", moveCircle);
    return () => window.removeEventListener("mousemove", moveCircle);
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={circleRef}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
      className="fixed top-0 left-0 pointer-events-none rounded-full z-50 bg-white mix-blend-difference "
    />
  );
};

export default Cursor;
