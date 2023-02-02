import React from "react";
import { RadioProps } from "./Radio.type";

const Radio = ({ label, size }: RadioProps) => {
  return (
    <label>
      <input type="radio" name="radio" />
      {label}
    </label>
  );
};

export default Radio;
