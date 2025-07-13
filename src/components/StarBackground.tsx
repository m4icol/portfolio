import React, { useEffect, useState } from 'react';

type Star = {
  id: number;
  top: number;
  left: number;
  animationDelay: number;
  size: number;
};

type StarBackgroundProps = {
  starCount?: number;
  topOffset?: number; // only top is customizable
  widthBackground?: number;
  heightBackground?: number;
};

const StarBackground: React.FC<StarBackgroundProps> = ({
  starCount = 100,
  topOffset = 0,
  widthBackground = 300,
  heightBackground = 100,
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        starArray.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          size: Math.random() * 1.5 + 0.5,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, [starCount]);

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0 overflow-hidden"
      style={{
        top: `${topOffset}px`,
        width: `${widthBackground}px`,
        height: `${heightBackground}px`,
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white/50 rounded-full flicker"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: '3s',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
