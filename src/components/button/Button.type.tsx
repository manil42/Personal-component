export interface ButtonProps {
  option: OptionTypes[];
  size?: "small" | "medium" | "large";
}

export interface OptionTypes {
  id: number;
  name: string;
  avatar?: string;
}
