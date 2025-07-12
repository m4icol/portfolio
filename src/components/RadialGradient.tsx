type RadialGradientProps = {
    size: string;
    top: string;
    left: string;
    gradiant: string;
  };
  
  export default function RadialGradient({
    size = "200",
    top = "0",
    left = "0",
    gradiant = ""
  }: RadialGradientProps) {
    return (
      <div
        className={`fixed blur4xl z-0 ${gradiant}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
    );
  } 
  