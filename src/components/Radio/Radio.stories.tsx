import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../assets/styles/components/index.scss";
import Radio from "./Radio";

export default {
  title: "components/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: any) => (
  <Radio {...args} />
);

export const label = Template.bind({});

label.args = {
  label: "radio",
};
