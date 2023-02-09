export interface InputProps {
  type: "text" | "email" | "password";
  value?: string;
  placeholder?: string;
  id?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
  handleChange?: (e: any) => void;
  errorMessage?: string;
  icon?: string;
}
