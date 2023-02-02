import { InputProps } from "../input";

export const DefaultInputValues: InputProps = {
  type: "text",
};

export const PlaceholderInputValues: InputProps = {
    type:"text",
    placeholder:"Enter Text"
}

export const InputSizeValues: InputProps = {
    type:"text",
    placeholder:"Enter Text",
    size:"medium"
}

export const InputDisableValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  isDisabled: true,
  value: "Hello World",
}
export const InputReadOnlyValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  isReadOnly: true,
  value: "Hello World",
}
export const InputErrorValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  value: "Hello World",
  isError:true
}

export const InputFieldWithErrorMessageValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  value: "Hello World",
  isError:true,
  errorMessage:"This is a error message"
}

export const InputFieldWithIconValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  value: "Hello World",
  icon:"person"
}

