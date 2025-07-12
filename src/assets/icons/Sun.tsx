type IconProps = {
    size?: number;
    color?: string;
    className?: string;
  };
  
  export default function Sun({ size = 32, color = "black", className = "" }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M1 16H2.66667M16 1V2.66667M29.3333 16H31M16 29.3333V31M5.33333 5.33333L6.5 6.5M26.6667 5.33333L25.5 6.5M25.5 25.5L26.6667 26.6667M6.5 25.5L5.33333 26.6667M9.33333 16C9.33333 17.7681 10.0357 19.4638 11.286 20.714C12.5362 21.9643 14.2319 22.6667 16 22.6667C17.7681 22.6667 19.4638 21.9643 20.714 20.714C21.9643 19.4638 22.6667 17.7681 22.6667 16C22.6667 14.2319 21.9643 12.5362 20.714 11.286C19.4638 10.0357 17.7681 9.33333 16 9.33333C14.2319 9.33333 12.5362 10.0357 11.286 11.286C10.0357 12.5362 9.33333 14.2319 9.33333 16Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  