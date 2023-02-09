import React from "react";
import { SwitchProps } from "./Switch.type";
const Switch = ({ theme, size, Disable, label }: SwitchProps) => {
  return (
    <label className={`switch `}>
      <input type="checkbox" disabled={Disable} />
      <span
        className={`slider round slider slider-${theme} slider-${size} ${
          Disable ? "sider-disable" : ""
        } `}
      ></span>
      <span className="switch-label">{label}</span>
    </label>
  );
};

export default Switch;
