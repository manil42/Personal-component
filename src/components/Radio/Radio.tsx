import React, { useState } from "react";
import { RadioProps } from "./Radio.type";

const Radio = ({
  label,
  isDisabled,
  theme = "primary",
  isError,
  emsg,
  value,
}: RadioProps) => {
  // const [selectValue, setSelectValue] = useState("");

  // const radioChangeHandler = (e: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setSelectValue(e.target.value);
  // };
  // const target = selectValue === value;

  return (
    <div className={`${isError === true ? `radio--error` : ``}`}>
      <div
        className={`radio-component radio--${theme} ${
          isDisabled === true ? `radio--disable` : ``
        }  ${isError === true ? `radio--danger` : ``} `}
      >
        <input
          type="radio"
          name="radio"
          className="radio-input"
          disabled={isDisabled}
          // checked={selectValue === value}
          // onChange={radioChangeHandler}
          value={value}
          id={label}
        />
        <label className="radio-label" htmlFor={label}>
          {label}
        </label>
      </div>
      {isError ? (
        <div
          className={`radio-emsg ${
            isDisabled === true ? `radio-emsg-disable` : ``
          }`}
        >
          {emsg}
        </div>
      ) : null}
    </div>
  );
};

export default Radio;
