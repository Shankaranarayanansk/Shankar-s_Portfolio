import React, { useLayoutEffect, useRef } from "react";
function Cursor() {
  const circleRefs = useRef([]);
  const coords = { x: 0, y: 0 };

  useLayoutEffect(() => {
    circleRefs.current = Array.from(document.querySelectorAll(".circle"));

    circleRefs.current.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY + window.scrollY;
      animate();
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const animate = () => {
    requestAnimationFrame(() => {
      let x = coords.x;
      let y = coords.y;

      circleRefs.current.forEach((circle, index) => {
        circle.style.left = x - 20 + "px";
        circle.style.top = y - 20 + "px";
        circle.style.transform = `scale(${(circleRefs.current.length - index) / circleRefs.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];

        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });
    });
  };

  return (
    <div>
      {Array.from({ length: 18 }).map((_, index) => (
        <div className="circle" key={index}></div>
      ))}
    </div>
  );
}

export default Cursor;