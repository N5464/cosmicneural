import React from 'react';

interface BoldCloseIconProps {
  size?: number;
  className?: string;
}

const BoldCloseIcon: React.FC<BoldCloseIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`bold-close-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First Line (Top-left to Bottom-right) */}
      <path
        d="M6 6 L18 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-95"
      />
      
      {/* Second Line (Top-right to Bottom-left) */}
      <path
        d="M18 6 L6 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-95"
      />
      
      {/* Center reinforcement */}
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        className="opacity-30"
      />
    </svg>
  );
};

export default BoldCloseIcon;