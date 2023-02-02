import { spawn } from "child_process";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { ButtonProps } from "./Button.type";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined button-icons bil-icons ">{children}</i>
);

const Button = ({
  icon,
  label,
  varient = "contained",
  isdisabled,
  shape,
  size = "small",
}: ButtonProps) => {
  return (
    <button
      className={`button-component button-${varient} button-${shape} button-${size} ${
        icon && label ? `button-icon-label` : ``
      }`}
      disabled={isdisabled}
    >
      {icon && <Icon>{icon ? icon : ""}</Icon>}
      {label && (
        <span className="button-span bil-span">{label ? label : ""}</span>
      )}
    </button>
  );
};

export default Button;