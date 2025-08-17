import React from 'react';

interface CrossedSwordsIconProps {
  size?: number;
  className?: string;
}

const CrossedSwordsIcon: React.FC<CrossedSwordsIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`spiritual-warrior-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First Sword (Top-left to Bottom-right) */}
      <g className="sword-one">
        {/* Blade - Long and Sharp */}
        <path
          d="M4 4 L16 16 L15.5 16.5 L3.5 4.5 Z"
          fill="currentColor"
          className="opacity-90"
        />
        {/* Blade Center Ridge */}
        <line
          x1="4"
          y1="4"
          x2="16"
          y2="16"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-70"
        />
        {/* Blade Edge Highlight */}
        <line
          x1="4.3"
          y1="3.7"
          x2="15.7"
          y2="15.3"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-50"
        />
        
        {/* Crossguard */}
        <rect
          x="2"
          y="2"
          width="4"
          height="0.8"
          rx="0.4"
          fill="currentColor"
          className="opacity-95"
          transform="rotate(45 4 2.4)"
        />
        
        {/* Handle/Grip */}
        <rect
          x="1.5"
          y="1.5"
          width="2"
          height="0.6"
          rx="0.3"
          fill="currentColor"
          className="opacity-85"
          transform="rotate(45 2.5 1.8)"
        />
        
        {/* Pommel */}
        <circle
          cx="2"
          cy="2"
          r="1"
          fill="currentColor"
          className="opacity-90"
        />
        <circle
          cx="2"
          cy="2"
          r="0.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="opacity-60"
        />
      </g>

      {/* Second Sword (Top-right to Bottom-left) */}
      <g className="sword-two">
        {/* Blade - Long and Sharp */}
        <path
          d="M20 4 L8 16 L8.5 16.5 L20.5 4.5 Z"
          fill="currentColor"
          className="opacity-90"
        />
        {/* Blade Center Ridge */}
        <line
          x1="20"
          y1="4"
          x2="8"
          y2="16"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-70"
        />
        {/* Blade Edge Highlight */}
        <line
          x1="19.7"
          y1="3.7"
          x2="8.3"
          y2="15.3"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-50"
        />
        
        {/* Crossguard */}
        <rect
          x="18"
          y="2"
          width="4"
          height="0.8"
          rx="0.4"
          fill="currentColor"
          className="opacity-95"
          transform="rotate(-45 20 2.4)"
        />
        
        {/* Handle/Grip */}
        <rect
          x="20.5"
          y="1.5"
          width="2"
          height="0.6"
          rx="0.3"
          fill="currentColor"
          className="opacity-85"
          transform="rotate(-45 21.5 1.8)"
        />
        
        {/* Pommel */}
        <circle
          cx="22"
          cy="2"
          r="1"
          fill="currentColor"
          className="opacity-90"
        />
        <circle
          cx="22"
          cy="2"
          r="0.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="opacity-60"
        />
      </g>

      {/* Central Crossing Point - Sacred Symbol */}
      <g className="sacred-center">
        {/* Binding at crossing */}
        <ellipse
          cx="12"
          cy="12"
          rx="1.5"
          ry="1"
          fill="currentColor"
          className="opacity-70"
          transform="rotate(45 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="1"
          ry="0.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="opacity-50"
          transform="rotate(45 12 12)"
        />
        
        {/* Sacred runes */}
        <circle
          cx="12"
          cy="12"
          r="0.3"
          fill="currentColor"
          className="opacity-80"
        />
      </g>

      {/* Blade Tips Enhancement */}
      <g className="blade-tips">
        {/* First sword tip */}
        <path
          d="M15.5 15.5 L16.5 16.5 L16 17 L15 16 Z"
          fill="currentColor"
          className="opacity-85"
        />
        {/* Second sword tip */}
        <path
          d="M8.5 15.5 L7.5 16.5 L8 17 L9 16 Z"
          fill="currentColor"
          className="opacity-85"
        />
      </g>

      {/* Metallic Shine Effects */}
      <g className="metallic-shine">
        {/* Shine on first blade */}
        <line
          x1="5"
          y1="5"
          x2="14"
          y2="14"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="1,1"
          className="opacity-30"
        />
        {/* Shine on second blade */}
        <line
          x1="19"
          y1="5"
          x2="10"
          y2="14"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="1,1"
          className="opacity-30"
        />
      </g>
    </svg>
  );
};

export default CrossedSwordsIcon;