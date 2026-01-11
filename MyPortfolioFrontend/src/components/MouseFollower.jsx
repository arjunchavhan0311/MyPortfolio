import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring configuration for smooth, "organic" movement
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX - 16); // Centering the 32px div
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default MouseFollower;