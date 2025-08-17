import React from 'react';

interface CrossedDaggersIconProps {
  size?: number;
  className?: string;
}

const CrossedDaggersIcon: React.FC<CrossedDaggersIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`crossed-daggers-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First Dagger (Top-left to Bottom-right) */}
      <g className="dagger-one">
        {/* Blade - Thick and Sharp */}
        <path
          d="M5 5 L16 16 L15 17 L4 6 Z"
          fill="currentColor"
          className="opacity-95"
        />
        {/* Blade Center Ridge */}
        <path
          d="M5.5 5.5 L15.5 15.5 L15 16 L5 6 Z"
          fill="currentColor"
          className="opacity-70"
        />
        
        {/* Guard */}
        <rect
          x="3.5"
          y="3.5"
          width="3"
          height="1"
          rx="0.5"
          fill="currentColor"
          className="opacity-90"
          transform="rotate(45 5 4)"
        />
        
        {/* Handle */}
        <rect
          x="2.5"
          y="2.5"
          width="2"
          height="0.8"
          rx="0.4"
          fill="currentColor"
          className="opacity-85"
          transform="rotate(45 3.5 2.9)"
        />
        
        {/* Pommel */}
        <circle
          cx="3"
          cy="3"
          r="0.8"
          fill="currentColor"
          className="opacity-90"
        />
      </g>

      {/* Second Dagger (Top-right to Bottom-left) */}
      <g className="dagger-two">
        {/* Blade - Thick and Sharp */}
        <path
          d="M19 5 L8 16 L9 17 L20 6 Z"
          fill="currentColor"
          className="opacity-95"
        />
        {/* Blade Center Ridge */}
        <path
          d="M18.5 5.5 L8.5 15.5 L9 16 L19 6 Z"
          fill="currentColor"
          className="opacity-70"
        />
        
        {/* Guard */}
        <rect
          x="17.5"
          y="3.5"
          width="3"
          height="1"
          rx="0.5"
          fill="currentColor"
          className="opacity-90"
          transform="rotate(-45 19 4)"
        />
        
        {/* Handle */}
        <rect
          x="19.5"
          y="2.5"
          width="2"
          height="0.8"
          rx="0.4"
          fill="currentColor"
          className="opacity-85"
          transform="rotate(-45 20.5 2.9)"
        />
        
        {/* Pommel */}
        <circle
          cx="21"
          cy="3"
          r="0.8"
          fill="currentColor"
          className="opacity-90"
        />
      </g>

      {/* Crossing Point */}
      <circle
        cx="12"
        cy="12"
        r="1.2"
        fill="currentColor"
        className="opacity-80"
      />
      <circle
        cx="12"
        cy="12"
        r="0.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        className="opacity-60"
      />
    </svg>
  );
};

export default CrossedDaggersIcon;