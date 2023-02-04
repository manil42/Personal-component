import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  CheckboxDisableValues,
  CheckboxWithLabelValues,
  CheckboxSizeValues,
  CheckboxErrorValues,
  CheckboxErrorMessageValues,
} from "components/__mock/CheckboxValues";
import Checkbox from "./Checkbox";

export default {
  title: "components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: any) => (
  <Checkbox {...args} />
);

export const CheckboxWithLabel = Template.bind({});

CheckboxWithLabel.args = {
  ...CheckboxWithLabelValues,
};

export const CheckboxDisable = Template.bind({});

CheckboxDisable.args = {
  ...CheckboxDisableValues,
};
export const CheckboxSize = Template.bind({});

CheckboxSize.args = {
  ...CheckboxSizeValues,
};

export const CheckboxError = Template.bind({});

CheckboxError.args = {
  ...CheckboxErrorValues,
};

export const CheckboxErrorMessage = Template.bind({});

CheckboxErrorMessage.args = {
  ...CheckboxErrorMessageValues,
};
