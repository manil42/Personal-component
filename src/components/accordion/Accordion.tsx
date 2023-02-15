import React, { useState } from "react";
import { AccordionProps } from "./Accordion.type";
import ReactDOMServer from "react-dom/server";

const Accordion = ({ title, content, openIcon, closeIcon }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${isActive === true ? "accordion" : `accordion-item`}`}>
      <div
        className={`${
          isActive === true ? "accordion-title" : `accordionItem-title`
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="title">{title}</div>

        <div className="icons">{isActive ? closeIcon : openIcon}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;


