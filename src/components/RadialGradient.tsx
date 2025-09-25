type RadialGradientProps = {
    size: string;
    top?: string;
    left?: string;
    gradient: string;
  };
  
  export default function RadialGradient({
    size = "200",
    top = "0",
    left = "0",
    gradient = "",
  }: RadialGradientProps) {
    return (
      <div
        className={`blur-4xl z-0 ${gradient}`}
        style={{
          width: `${size}`,
          height: `${size}`,
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
    );
  } 
  