import { InputProps } from "../input";

let value = ""

export const DefaultInputValues: InputProps = {
  type: "text",
  handleChange:(e:any) => value = e.target.value
};

export const PlaceholderInputValues: InputProps = {
    type:"text",
    placeholder:"Enter Text",
    handleChange:(e:any) => value = e.target.value

}

export const InputSizeValues: InputProps = {
    type:"text",
    placeholder:"Enter Text",
    size:"medium",
    handleChange:(e:any) => value = e.target.value

}

export const InputDisableValues: InputProps = {
  type:"text",
  size: "medium",
  isDisabled: true,
  value: "Hello World",
  handleChange:(e:any) => value = e.target.value

}
export const InputReadOnlyValues: InputProps = {
  type:"text",
  size: "medium",
  isReadOnly: true,
  value: "Hello World",
  handleChange:(e:any) => value = e.target.value

}
export const InputErrorValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  value: "Hello World",
  isError:true,
  handleChange:(e:any) => value = e.target.value

}

export const InputFieldWithErrorMessageValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  value: "Hello World",
  isError:true,
  errorMessage:"This is a error message",
  handleChange:(e:any) => value = e.target.value

}

export const InputFieldWithIconValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  size: "medium",
  value: "Hello World",
  icon:"person",
  iconSize:"medium",
  handleChange:(e:any) => value = e.target.value

}

