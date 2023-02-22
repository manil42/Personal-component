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
  ariaLabel,
  ariaDisabled,
  varient = "contained",
  disabled,
  shape,
  theme,
  size = "small",
  id,
  accesskey,
  autofocus,
  form,
  formenctype,
  formnovalidate,
  formtarget,
  formaction,
  formmethod,
  name,
  type,
  value,
  style,
  className,
  onClick,
  onDoubleClick,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  ...props
}: ButtonProps) => {
  return (
    <button
      role="button"
      className={`button-component button-${varient}
       button-${shape} 
       ${icon && label ? `button-icon-label` : ``}  
       
       ${icon ? `icon-${size}` : `button-${size}`}
      button-color-${theme} 
      ${disabled ? `button-disabled` : ``}
         ${className}`}
      disabled={disabled}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      aria-disabled={ariaDisabled}
      {...props}
    >
      {icon && <Icon>{icon ? icon : ""}</Icon>}
      {label && (
        <span className="button-span bil-span">{label ? label : ""}</span>
      )}
    </button>
  );
};

export default Button;
