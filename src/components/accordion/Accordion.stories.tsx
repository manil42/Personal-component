import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";
import { accordionExample } from "components/__mock/AccordionValue";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: any) => (
  <Accordion {...args} />
);

export const AccordionExample = Template.bind({});

AccordionExample.args = {
  ...accordionExample,
};
