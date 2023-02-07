import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import {
  ButtonIcon,
  ButtonLabel,
  ButtonLabelIcon,
  DisableButtonArgs,
} from "components/__mock/ButtonValue";
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);
export const ButtonWithLabel = Template.bind({});
ButtonWithLabel.args = {
  ...ButtonLabel,
};
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  ...ButtonIcon,
};
export const ButtonWithLabelIcon = Template.bind({});
ButtonWithLabelIcon.args = {
  ...ButtonLabelIcon,
};
export const DisableButton = Template.bind({});
DisableButton.args = {
  ...DisableButtonArgs,
};
