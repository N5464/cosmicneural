import React from 'react';

interface WarriorXIconProps {
  size?: number;
  className?: string;
}

const WarriorXIcon: React.FC<WarriorXIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`warrior-x-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First Strike (Top-left to Bottom-right) */}
      <g className="strike-one">
        <path
          d="M5 5 L19 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-95"
        />
        {/* Strike energy trail */}
        <path
          d="M5 5 L19 19"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="opacity-60"
          strokeDasharray="2,1"
        />
      </g>

      {/* Second Strike (Top-right to Bottom-left) */}
      <g className="strike-two">
        <path
          d="M19 5 L5 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-95"
        />
        {/* Strike energy trail */}
        <path
          d="M19 5 L5 19"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="opacity-60"
          strokeDasharray="2,1"
        />
      </g>

      {/* Central Impact Point */}
      <circle
        cx="12"
        cy="12"
        r="1.5"
        fill="currentColor"
        className="opacity-80"
      />
      
      {/* Energy Burst */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="opacity-40"
        strokeDasharray="1,2"
      />
      
      {/* Corner reinforcements */}
      <circle cx="6" cy="6" r="1" fill="currentColor" className="opacity-70" />
      <circle cx="18" cy="6" r="1" fill="currentColor" className="opacity-70" />
      <circle cx="6" cy="18" r="1" fill="currentColor" className="opacity-70" />
      <circle cx="18" cy="18" r="1" fill="currentColor" className="opacity-70" />
    </svg>
  );
};

export default WarriorXIcon;