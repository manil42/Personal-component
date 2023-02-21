export interface AvatarProps {
  imageUrl?: any;
  name?: string;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded";
  color?: "primary" | "secondary" | "sucess"
  children?: JSX.Element|JSX.Element[];
  badgeVarient?: "active"
  badgeColor?:"primary" | "secondary" | "sucess"
}
