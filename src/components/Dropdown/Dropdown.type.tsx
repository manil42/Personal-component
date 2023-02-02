export interface DropdownProps {
  option: OptionTypes[];
  handleChange: (e: any) => void;
  size: "small" | "medium" | "large";
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  openParentColor?: string;
}

export interface OptionTypes {
  id: number;
  name: string;
  value: string;
  avatar?: string;
}

// /**
//  * Is this the principal call to action on the page?
//  */
// primary?: boolean;
// /**
//  * What background color to use
//  */
// backgroundColor?: string;
// /**
//  * How large should the button be?
//  */
// size?: 'small' | 'medium' | 'large';
// /**
//  * Button contents
//  */
// label: string;
// /**
//  * Optional click handler
//  */
// onClick?: () => void;
