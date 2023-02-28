import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "components/button/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: any) => (
  // <div style={{ position: "relative" }}>
  <div style={{ position: "absolute", top: "100px", left: "150px" }}>
    <Tooltip {...args} />
  </div>
  // </div>
);

export const TooltipButton = Template.bind({});

TooltipButton.args = {
  children: <Button label="button "></Button>,
  direction: "right",
  description: "click me !",
};

export const TooltipHeader = Template.bind({});

TooltipHeader.args = {
  children: <h2>Testing Header 2</h2>,
  direction: "right",
  description: "header 2",
};
