import React, { FC, PropsWithChildren, useState } from "react";
import { InputProps } from "./Input.type";
import "material-symbols";

const Input = ({
  icon,
  type,
  value,
  placeholder,
  handleChange,
  errorMessage,
  id,
  isDisabled,
  isError,
  isReadOnly,
}: InputProps) => {
  const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className={`material-symbols-outlined ${icon ? "icon" : ""}  `}>
      {children}
    </i>
  );



  return (
    <div>
      <div className="input-container">
        <Icon>{icon}</Icon>


        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadOnly}
          className={`input ${isError ? "input--error" : "input"} ${
            icon && "icon-input"
          } `}
        />
      </div>
      {isError && <div className="error--message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
