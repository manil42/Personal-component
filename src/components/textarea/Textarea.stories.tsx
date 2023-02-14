import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: any) => (
  <Textarea {...args} />
);

export const TextareaExample = Template.bind({});

TextareaExample.args = {
  label: "hello",
};
