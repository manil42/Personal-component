export interface RadioProps {
  label?: string;
  isDisabled?: boolean;
  theme?: "primary" | "secondary" | "danger";
  emsg?: string;
  isError?: boolean;
  change?: any;
  value?: string;
  //isSelected?: boolean;
  // message?: string;
}
