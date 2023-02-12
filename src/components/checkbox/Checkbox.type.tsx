export interface CheckboxProps {
    label:string;
    isDisabled?:boolean;
    size?: "small" | "medium" | "large";
    isError?: boolean;
    errorMessage?:string;
    value?: boolean;
}