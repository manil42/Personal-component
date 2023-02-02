import React, { FC, PropsWithChildren, useState } from "react";
import { InputProps } from "./Input.type";

const Input = ({
  iconSize="medium",
  icon,
  type,
  value,
  placeholder,
  handleChange,
  errorMessage,
  id,
  size = "medium",
  isDisabled,
  isError,
  isReadOnly,
}: InputProps) => {
  const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className={`material-symbols-outlined icon icon--${iconSize} `}>{children}</i>
  );

  return (
    <div>
      <div className="input-container">
        {icon && <Icon>{icon}</Icon>}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadOnly}
          className={`input input--${size} ${
            isError ? "input--error" : "input"
          } ${icon && "icon-input"}`}
        />
      </div>

      {errorMessage && <div className="error--message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
