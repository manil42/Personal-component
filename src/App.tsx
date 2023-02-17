import Switch from "components/switch/Switch";
import React, { useEffect, useState } from "react";
import "./App.css";
import Accordion from "components/accordion/Accordion";
import AccordionItem from "components/accordion/accordionItem/AccordionItem";
import { AccordionTitle } from "components/accordion/accordionTitle/AccordionTitle";
import { AccordionDetail } from "components/accordion/accordionDetail/AccordionDetail";
function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="App">
      <Accordion>
        <AccordionItem isActive>
          <AccordionTitle>hello</AccordionTitle>
          <AccordionDetail> lorem </AccordionDetail>
        </AccordionItem>
        <AccordionItem isActive>
          <AccordionTitle>Manil</AccordionTitle>
          <AccordionDetail>Maharjan</AccordionDetail>
        </AccordionItem>
        <AccordionItem isActive>
          <AccordionTitle>joel</AccordionTitle>
          <AccordionDetail>Maharjan</AccordionDetail>
        </AccordionItem>
        <AccordionItem isActive>
          <AccordionTitle>Praful</AccordionTitle>
          <AccordionDetail>Maharjan</AccordionDetail>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
