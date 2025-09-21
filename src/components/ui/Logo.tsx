import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  className = "",
  showText = true,
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div
        className="flex items-center justify-center rounded-lg"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #0A2342 0%, #00D4FF 100%)",
        }}
      >
        <svg
          width={size * 0.6}
          height={size * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className="font-display font-bold text-[#0A2342]"
          style={{ fontSize: size * 0.6 }}
        >
          Kriyantrai
        </span>
      )}
    </div>
  );
};

export default Logo;

