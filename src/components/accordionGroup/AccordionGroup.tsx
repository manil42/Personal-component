import Accordion from "components/accordion/Accordion";
import { AccordionGroupProps } from "./AccordionGroup.type";
import { useState } from "react";

export const AccordionGroup = ({ accordionData }: AccordionGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {accordionData.map(({ title, content, id }) => (
        <Accordion title={title} content={content} key={id} />
      ))}
    </>
  );
};

//isActive === true? content={content} && set
