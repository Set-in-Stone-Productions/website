import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export const EmailIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Envelope body */}
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Envelope flap as triangle */}
    <path
      d="M3 5L12 13L21 5"
      stroke="#FF6F3C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PreProductionIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Lightbulb shape - planning and ideas */}
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Bulb base */}
    <rect
      x="9"
      y="20"
      width="6"
      height="2"
      fill="#FF6F3C"
      rx="1"
    />
    {/* Light rays */}
    <path
      d="M12 6V8M8.5 9.5L9.5 10.5M15.5 9.5L14.5 10.5"
      stroke="#FF6F3C"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ProductionIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Camera body */}
    <rect
      x="2"
      y="7"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Lens */}
    <circle
      cx="10"
      cy="13"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Inner lens */}
    <circle
      cx="10"
      cy="13"
      r="2"
      fill="#FF6F3C"
    />
    {/* Viewfinder */}
    <rect
      x="14"
      y="4"
      width="6"
      height="3"
      rx="1"
      fill="currentColor"
    />
    {/* Recording light */}
    <circle
      cx="20"
      cy="9"
      r="1.5"
      fill="#FF6F3C"
    />
  </svg>
);

export const PostProductionIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Film frames */}
    <rect
      x="4"
      y="3"
      width="7"
      height="9"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="13"
      y="3"
      width="7"
      height="9"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="4"
      y="14"
      width="7"
      height="9"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="13"
      y="14"
      width="7"
      height="9"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Cut line */}
    <path
      d="M2 12L22 12"
      stroke="#FF6F3C"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

export const DistributionIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Central node */}
    <circle
      cx="12"
      cy="12"
      r="4"
      fill="#FF6F3C"
    />
    {/* Distribution arrows */}
    <path
      d="M12 8V4M12 16V20M16 12H20M8 12H4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Diagonal arrows */}
    <path
      d="M15.5 8.5L18.5 5.5M8.5 15.5L5.5 18.5M15.5 15.5L18.5 18.5M8.5 8.5L5.5 5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Arrow heads */}
    <path
      d="M3 4L4 5L5 4M19 4L20 5L21 4M3 20L4 19L5 20M19 20L20 19L21 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);