import React, { useState } from "react";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = ({
  label,
  isDisabled,
  size = "medium",
  isError,
  errorMessage,
}: CheckboxProps) => {
  return (
    <div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className={`checked checkbox--${size} ${
            isError ? "checkbox-error" : "checked"
          }`}
          disabled={isDisabled}
        />
        <span>{label}</span>
      </div>
      {isError && <div className="checkbox--message">{errorMessage}</div>}
    </div>
  );
};

export default Checkbox;
