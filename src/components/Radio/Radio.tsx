import React from "react";
import { RadioProps } from "./Radio.type";

const Radio = ({ label, size }: RadioProps) => {
  return (
    <div className="radio-component">
      <input type="radio" name="radio" className="radio-input" />
      <label className="radio-label"> {label} </label>
    </div>
  );
};

export default Radio;
