import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { DefaultInputValues, InputDisableValues, InputErrorValues, InputFieldWithDateType, InputFieldWithErrorMessageValues, InputReadOnlyValues, InputSizeValues, PlaceholderInputValues } from "../__mock/InputValues";
export default {
  title: "Components/input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: any) => (
  <Input {...args} />
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  ...DefaultInputValues
};

export const PlaceholderInput = Template.bind({})

PlaceholderInput.args = {
    ...PlaceholderInputValues
}

export const InputDisable = Template.bind({})

InputDisable.args = {
    ...InputDisableValues
}

export const InputReadOnly = Template.bind({})

InputReadOnly.args = {
    ...InputReadOnlyValues
}

export const InputError = Template.bind({})

InputError.args = {
    ...InputErrorValues
}

export const InputFieldWithErrorMessage = Template.bind({})

InputFieldWithErrorMessage.args = {
    ...InputFieldWithErrorMessageValues
}

export const InputFieldWithDate = Template.bind({})

InputFieldWithDate.args = {
    ...InputFieldWithDateType
}