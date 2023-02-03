import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckboxValues } from "components/__mock/CheckboxValues";
import Checkbox from "./Checkbox";

export default {
    title:"components/Checkout",
    component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args: any) => (
    <Checkbox {...args} />
  );

export const DefaultCheckbox = Template.bind({})

DefaultCheckbox.args = {
    ...CheckboxValues
}