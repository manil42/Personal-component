import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionGroup } from "./AccordionGroup";

export default {
  title: "Components/AccordionGroup",
  component: AccordionGroup,
} as ComponentMeta<typeof AccordionGroup>;

const Template: ComponentStory<typeof AccordionGroup> = (args: any) => (
  <AccordionGroup {...args} />
);

export const AccordionGroupExample = Template.bind({});

AccordionGroupExample.args = {
  accordionData: [
    { title: "sdf", content: "sdfdfd" },
    { title: "hello", content: "world" },
    { title: "manil", content: "maharjan" },
  ],
};
