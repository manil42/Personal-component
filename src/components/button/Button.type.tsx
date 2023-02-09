export interface ButtonProps {
  icon?: string;
  label?: string;
  Disabled?: boolean;
  varient?: "text" | "contained" | "outlined";
  theme?: "primary" | "secondary" | "sucess" | "danger";
  shape?: "circle" | "square" | "rounded";
  size?: "small" | "medium" | "large";
}
