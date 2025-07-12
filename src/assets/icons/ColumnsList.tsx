export type ColumnsListProps = {
    size?: number;
    color?: string;
    className?: string;
  };
  
  export default function ColumnsList({
    size = 24,
    color = "white",
    className = "",
  }: ColumnsListProps) {
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
            fill={color}
            rx="1"
          />
        ))}
      </svg>
    );
  }
  