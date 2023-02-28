export interface TooltipProps {
  children?: React.ReactElement;
  direction: "top" | "right" | "left" | "bottom";
  className?: string;
  description?: any;
  color?: "dark" | "light";
  arrow?: boolean;
}
