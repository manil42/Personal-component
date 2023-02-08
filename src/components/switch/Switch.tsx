import React from "react";
import { SwitchProps } from "./Switch.type";
const Switch = ({ theme, size, isDisable, label }: SwitchProps) => {
  return (
    <label className={`switch `}>
      <input type="checkbox" disabled={isDisable} />
      <span
        className={`slider round slider slider-${theme} slider-${size} ${
          isDisable === true ? "sider-disable" : ""
        } `}
      ></span>
      <span className="switch-label">{label}</span>
    </label>
  );
};

export default Switch;
