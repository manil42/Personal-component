import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { ButtonLabel } from "components/__mock/ButtonValue";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  ...ButtonLabel,
};
