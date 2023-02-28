export interface SelectProps {
  option: OptionTypes[];
  handleChange: (e: any) => void;
  size: "small" | "medium" | "large";
  disabled?:boolean;
  isError?:boolean;
  errorMessage?:string;
  isMultiSelect?:boolean;
  placeholder?:string;
  label?:string;
  valueSelected?:any
}

export interface OptionTypes {
  id: number;
  name: string;
  value: string;
  avatar?: string;
  error?: string;
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
