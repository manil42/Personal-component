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
import { DropdownProps, OptionTypes } from "./Dropdown.type";
import "../../assets/styles/components/index.scss";

// import "./styles.css";
import "material-symbols";
import { StyledDropdown } from "./StyleDropdown";

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

export const Dropdown = ({
  size = "small",
  handleChange,
  option,
  isDisabled,
  isError,
  isMultiSelect = false,
  errorMessage,
  placeholder,
  label,
}: DropdownProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<OptionTypes>();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    setValue(option[0]);
  }, []);

  // const handleValueChange = (selectedValue: OptionTypes) => {
  //
  // };

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
      className={`dropdown dropdown--${size} ${isOpen ? "open" : ""} 
      `}
    >
      <button
        className={`${isError ? "dropdown--error" : ""} ${
          isDisabled ? "dropdown--disabled" : ""
        }`}
        disabled={isDisabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isMultiSelect && value && value.avatar && (
          <Icon>{value && isError ? value.error : value.avatar}</Icon>
        )}
        <span className="dropdown--options">
          {isMultiSelect && selectedValues
            ? selectedValues.length > 0 ? selectedValues + " " 
            : placeholder && <span className="dropdown--placeholder">{ placeholder }</span> : value && value.name }
        </span>
        <div className="icon--select">
          <Icon>{isOpen ? "close" : "expand_more"}</Icon>
        </div>
      </button>
      <div className="menu">
        {option.map((item, index) => {
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
