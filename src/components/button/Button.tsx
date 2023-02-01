import { spawn } from "child_process";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { ButtonProps } from "./Button.type";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined button-Icon">{children}</i>
);

const Button = ({
  icon,
  label,
  varient = "contained",
  isdisabled,
  
}: ButtonProps) => {
  return (
    <button
      disabled={isdisabled}
      className={`button-component button-${varient}`}
    >
      {icon && <Icon>{icon ? icon : ""}</Icon>}
      {label && <span className="button-span">{label ? label : ""}</span>}
    </button>
  );
};

export default Button;
