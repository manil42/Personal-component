import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";
// import { accordionExample } from "components/__mock/AccordionValue";
import { AccordionTitle } from "components/accordion/accordionTitle/AccordionTitle";
import AccordionItem from "./accordionItem/AccordionItem";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: any) => (
  <Accordion>{...args}</Accordion>
);

export const AccordionExample = Template.bind({});

AccordionExample.args = {
  // <AccordionItem></AccordionItem>
};
