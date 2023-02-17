import React from "react";
import { AccordionTitleProps } from "./Accordion.type";

export const AccordionTitle = ({
  expanded,
  handleClick,
  children,
}: AccordionTitleProps) => {
  return (
    <h2 className={` accordion-title `} onClick={() => handleClick}>
      {children}
    </h2>
  );
};
