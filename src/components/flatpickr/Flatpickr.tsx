import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import { FlatpickrProps } from "./Flatpickr.type";

const Flatpickr = ({ onChange, defaultValue, options }: FlatpickrProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const fp = flatpickr(inputRef.current, {
        onChange,
        defaultDate: defaultValue,
        ...options,
      });
      return () => {
        fp.destroy();
      };
    }
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default Flatpickr;
