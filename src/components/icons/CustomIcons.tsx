import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export const AIIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

export const MLIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M7 7H11V11H7V7Z" fill="currentColor" />
    <path d="M13 7H17V11H13V7Z" fill="currentColor" />
    <path d="M7 13H11V17H7V13Z" fill="currentColor" />
    <path d="M13 13H17V17H13V13Z" fill="currentColor" />
    <circle cx="9" cy="9" r="1" fill="white" />
    <circle cx="15" cy="9" r="1" fill="white" />
    <circle cx="9" cy="15" r="1" fill="white" />
    <circle cx="15" cy="15" r="1" fill="white" />
  </svg>
);

export const AutomationIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 4.92871L16.2426 7.75736M7.75736 16.2426L4.92871 19.0784M19.0784 19.0784L16.2426 16.2426M7.75736 7.75736L4.92871 4.92871"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const AnalyticsIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M3 3V19C3 20.1046 3.89543 21 5 21H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect x="7" y="12" width="4" height="6" fill="currentColor" />
    <rect x="13" y="8" width="4" height="10" fill="currentColor" />
    <rect x="19" y="6" width="4" height="12" fill="currentColor" />
    <circle cx="9" cy="10" r="2" fill="white" />
    <circle cx="15" cy="6" r="2" fill="white" />
    <circle cx="21" cy="4" r="2" fill="white" />
  </svg>
);

export const InnovationIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M9.5 2L10.5 6.5L15 7.5L10.5 8.5L9.5 13L8.5 8.5L4 7.5L8.5 6.5L9.5 2Z"
      fill="currentColor"
    />
    <path
      d="M15.5 14L16.5 18.5L21 19.5L16.5 20.5L15.5 25L14.5 20.5L10 19.5L14.5 18.5L15.5 14Z"
      fill="currentColor"
      opacity="0.6"
    />
    <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

export const ScalabilityIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L3 7L12 12L21 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 9V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17 9V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="6" r="1" fill="currentColor" />
    <circle cx="7" cy="13" r="1" fill="currentColor" />
    <circle cx="17" cy="13" r="1" fill="currentColor" />
  </svg>
);

export const SolutionsIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const IntegrityIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L3 7L12 12L21 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 16L11.5 17.5L14 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClientSuccessIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 18L11 20L15 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FutureFirstIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 6V12L16 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 4L8 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 4L16 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2 12H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

