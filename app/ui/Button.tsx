import React from "react";

type Props = {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
};

const Button = ({
  type,
  disabled = false,
  onClick,
  ariaLabel,
  className,
  children,
}: Props) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
