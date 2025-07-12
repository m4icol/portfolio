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
  topOffset?: number; 
  leftOffset?: number;
  widthBackground?: number;
  heightBackground?: number;
};

const StarBackground: React.FC<StarBackgroundProps> = ({
  starCount = 100,
  topOffset = 0,
  leftOffset = 0,
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
      className="absolute pointer-events-none z-0 rounded-b-3xl overflow-hidden"
      style={{
        top: `${topOffset}%`,
        left: `${leftOffset}%`,
        right: 0,
        bottom: 0,
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
            animationDuration: '2s',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
