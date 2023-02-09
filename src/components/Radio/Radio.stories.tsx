import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../assets/styles/components/index.scss";
import Radio from "./Radio";
import {
  Radiolabel1,
  Radiolabel2,
  RadioDisable,
} from "components/__mock/RadioValue";
import { useState } from "react";

export default {
  title: "components/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: any) => (
  <div style={{ display: "flex" }}>
    <Radio {...args} />
    <Radio {...args} label="two" />
  </div>
);

export const label = Template.bind({});

label.args = {
  ...Radiolabel1,
};

export const radioWithErrorMessage = Template.bind({});

radioWithErrorMessage.args = {
  ...Radiolabel2,
};

export const radioDisable = Template.bind({});

radioDisable.args = {
  ...RadioDisable,
};
