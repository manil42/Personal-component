import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";
// import { accordionExample } from "components/__mock/AccordionValue";
import { AccordionTitle } from "components/accordion/accordionTitle/AccordionTitle";
import AccordionItem from "./accordionItem/AccordionItem";
import { AccordionDetail } from "./accordionDetail/AccordionDetail";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: any) => (
  <Accordion {...args} />
);

export const AccordionWithoutBorder = Template.bind({});

AccordionWithoutBorder.args = {
  children: [
    <AccordionItem isActive>
      <AccordionTitle>hello</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, a!
        Asperiores consectetur odit animi tenetur, consequatur sequi nostrum
        numquam ratione assumenda laudantium, officiis reiciendis itaque harum
        nihil fugit possimus exercitationem.
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive>
      <AccordionTitle>Manil</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        nesciunt iste atque natus inventore assumenda suscipit, et obcaecati
        porro autem perspiciatis architecto fuga numquam dolor rerum quas fugiat
        exercitationem sed.{" "}
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive>
      <AccordionTitle>joel</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
        impedit.
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive>
      <AccordionTitle>Praful</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
        necessitatibus, magnam aut deserunt architecto accusantium laudantium
        numquam corrupti non suscipit iusto atque quibusdam nemo unde dolorem
        deleniti consectetur soluta!
      </AccordionDetail>
    </AccordionItem>,
  ],
};

export const AccordionWithBorder = Template.bind({});

AccordionWithBorder.args = {
  children: [
    <AccordionItem isActive border>
      <AccordionTitle>hello</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, a!
        Asperiores consectetur odit animi tenetur, consequatur sequi nostrum
        numquam ratione assumenda laudantium, officiis reiciendis itaque harum
        nihil fugit possimus exercitationem.
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive border>
      <AccordionTitle>Manil</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        nesciunt iste atque natus inventore assumenda suscipit, et obcaecati
        porro autem perspiciatis architecto fuga numquam dolor rerum quas fugiat
        exercitationem sed.{" "}
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive border>
      <AccordionTitle>joel</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
        impedit.
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive border>
      <AccordionTitle>Praful</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
        necessitatibus, magnam aut deserunt architecto accusantium laudantium
        numquam corrupti non suscipit iusto atque quibusdam nemo unde dolorem
        deleniti consectetur soluta!
      </AccordionDetail>
    </AccordionItem>,
  ],
};

export const AccordionWithMargin = Template.bind({});

AccordionWithMargin.args = {
  children: [
    <AccordionItem isActive margin>
      <AccordionTitle>hello</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, a!
        Asperiores consectetur odit animi tenetur, consequatur sequi nostrum
        numquam ratione assumenda laudantium, officiis reiciendis itaque harum
        nihil fugit possimus exercitationem.
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive margin>
      <AccordionTitle>Manil</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        nesciunt iste atque natus inventore assumenda suscipit, et obcaecati
        porro autem perspiciatis architecto fuga numquam dolor rerum quas fugiat
        exercitationem sed.{" "}
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive margin>
      <AccordionTitle>joel</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
        impedit.
      </AccordionDetail>
    </AccordionItem>,
    <AccordionItem isActive margin>
      <AccordionTitle>Praful</AccordionTitle>
      <AccordionDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
        necessitatibus, magnam aut deserunt architecto accusantium laudantium
        numquam corrupti non suscipit iusto atque quibusdam nemo unde dolorem
        deleniti consectetur soluta!
      </AccordionDetail>
    </AccordionItem>,
  ],
};
