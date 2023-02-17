import React from "react";
import { AccordionDetailProps } from "./AccordionDetail.type";

export const AccordionDetail = ({
  expanded,
  children,
}: AccordionDetailProps) => {
  return <p>{children}</p>;
};
