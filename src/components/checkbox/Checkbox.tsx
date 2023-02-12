import React, { useState } from "react";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = ({
  label,
  isDisabled,
  size = "small",
  isError,
  errorMessage,
}: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label htmlFor="checkbox">
      <div className="checkbox-wrapper">
        <input
          id="checkbox"
          type="checkbox"
          className={`checked checkbox--${size} ${
            isError ? "checkbox-error" : "checked"
          }`}
          aria-checked={checked}
          disabled={isDisabled}
          onChange={handleChange}
        />
        <span>{label}</span>
      </div>
      {isError && <div className="checkbox--message">{errorMessage}</div>}
    </label>
  );
};

export default Checkbox;
