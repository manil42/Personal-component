import React from "react";
import { AccordionItemProps } from "./AccordionItem.type";
import { AccordionTitle } from "../accordionTitle/AccordionTitle";
import { AccordionDetail } from "../accordionDetail/AccordionDetail";

const AccordionItem = ({ isActive, onClick, children }: AccordionItemProps) => {
  const titleChild = React.Children.toArray(children).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === AccordionTitle
  );
  const detailChild = React.Children.toArray(children).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === AccordionDetail
  );

  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-title-icon" onClick={onClick}>
        <div>{titleChild}</div>
        <div className={`accordion-icon ${isActive ? "active" : ""}`} />
      </div>
      {isActive && <div className={`accordion-content `}>{detailChild}</div>}
    </div>
  );
};

export default AccordionItem;
