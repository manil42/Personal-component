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
import "../../assets/styles/index.scss";

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

export const Dropdown = ({size = 'medium',  handleChange, backgroundColor, color, option, hoverBackgroundColor, openParentColor}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<OptionTypes>();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    setValue(option[0]);
  }, []);

  const handleValueChange = (selectedValue: OptionTypes) => {
    setValue(selectedValue);
    handleChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <StyledDropdown
      backgroundColor={backgroundColor ? backgroundColor : "#211d26"}
      color={color ? color : "#f9f9f9"}
      hoverBackgroundColor={
        hoverBackgroundColor ? hoverBackgroundColor : "#2d2834"
      }
      openParentColor = {
        openParentColor ? openParentColor : "#712ae0"
      }
    >
      <div
        ref={ref}
        className={`dropdown dropdown--${size} ${
          isOpen ? "open" : ""
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {value && value.avatar && <Icon>{value && value.avatar}</Icon>}
          <span>{value && value.name}</span>
          <Icon>{isOpen ? "close" : "expand_more"}</Icon>
        </button>
        <div className="menu">
          {option.map((item, index) => {
            return (
              <button key={index} onClick={() => handleValueChange(item)}>
                {item.avatar && <Icon>{item.avatar}</Icon>}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </StyledDropdown>
  );
};
