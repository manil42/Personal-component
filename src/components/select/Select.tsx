import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { OptionTypes, SelectProps } from "./Select.type";
import "../../assets/styles/components/index.scss";

import "material-symbols";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined">{children}</i>
);

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const Select = ({
  size = "small",
  handleChange,
  option,
  isDisabled,
  isError,
  isMultiSelect = false,
  errorMessage,
  placeholder,
  label,
}: SelectProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<OptionTypes>();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    setValue(option[0]);
  }, []);

  const handleOptionClick = (option: OptionTypes) => {
    if (isMultiSelect) {
      if (selectedValues.includes(option.value)) {
        setSelectedValues(
          selectedValues.filter((value) => value !== option.value)
        );
        setValue(option);
      } else {
        setSelectedValues([...selectedValues, option.value]);
        setValue(option);
      }
    } else {
      setValue(option);
      handleChange(option);
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={ref}
      className={`select select--${size} ${isOpen ? "open" : ""} 
      `}
    >
      <button
        className={`${isError ? "select--error" : ""} ${
          isDisabled ? "select--disabled" : ""
        }`}
        disabled={isDisabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isMultiSelect && value && value.avatar && (
          <Icon>{value && isError ? value.error : value.avatar}</Icon>
        )}
        <span className="select--options">
          {isMultiSelect && selectedValues
            ? selectedValues.length > 0
              ? selectedValues + " "
              : placeholder && (
                  <span className="select--placeholder">{placeholder}</span>
                )
            : value && value.name}
        </span>
        <div className="icon--select">
          <Icon>{isOpen ? "close" : "expand_more"}</Icon>
        </div>
      </button>
      <div className="menu">
        {option.map((item: any, index: any) => {
          return (
            <button
              key={index}
              className={`toogle-button ${
                isMultiSelect && selectedValues.includes(item.value)
                  ? "active"
                  : ""
              }`}
              onClick={() => handleOptionClick(item)}
            >
              {item.avatar && <Icon>{item.avatar}</Icon>}
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
      {isError && <div className="error--message">{errorMessage}</div>}
    </div>
  );
};
