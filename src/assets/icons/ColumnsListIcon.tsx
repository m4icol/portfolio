export type ColumnsListIconProps = {
    size?: number;
    className?: string;
  };
  
  export default function ColumnsListIcon({
    size = 24,
    className = "",
  }: ColumnsListIconProps) {
    const barHeight = 2;
    const gap = 6;
  
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x="2"
            y={4 + i * (barHeight + gap)}
            width="20"
            height={barHeight}
            fill="currentColor"
            rx="1"
          />
        ))}
      </svg>
    );
  }
  