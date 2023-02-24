import React, { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./Button.type";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined button-icons bil-icons ">
    {children}
  </i>
);

const Button = ({
  icon,
  label,
  variant = "contained",
  isDisabled,
  shape,
  theme,
  size = "small",
}: ButtonProps) => {
  return (
    <button
      role="button"
      className={`button-component button-${variant} button-${shape} button-${size} ${
        icon && label ? `button-icon-label` : ``
      }  button-color-${theme} ${isDisabled ? `button-disabled` : ``}`}
      aria-label="this will take you to button"
      disabled={isDisabled}
    >
      {icon && <Icon>{icon ? icon : ""}</Icon>}
      {label && (
        <span className="button-span bil-span">{label ? label : ""}</span>
      )}
    </button>
  );
};

export default Button;
