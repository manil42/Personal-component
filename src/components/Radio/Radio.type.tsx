export interface RadioProps {
  label?: string;
  Disable?: boolean;
  theme?: "primary" | "secondary" | "danger";
  emsg?: string;
  isError?: boolean;
  change?: any;
  value?: string;
}
