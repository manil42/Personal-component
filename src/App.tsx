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
        <AccordionItem isActive margin>
          <AccordionTitle>hello</AccordionTitle>
          <AccordionDetail>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, a!
            Asperiores consectetur odit animi tenetur, consequatur sequi nostrum
            numquam ratione assumenda laudantium, officiis reiciendis itaque
            harum nihil fugit possimus exercitationem.
          </AccordionDetail>
        </AccordionItem>
        <AccordionItem isActive margin>
          <AccordionTitle>Manil</AccordionTitle>
          <AccordionDetail>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            nesciunt iste atque natus inventore assumenda suscipit, et obcaecati
            porro autem perspiciatis architecto fuga numquam dolor rerum quas
            fugiat exercitationem sed.
          </AccordionDetail>
        </AccordionItem>
        <AccordionItem isActive margin>
          <AccordionTitle>joel</AccordionTitle>
          <AccordionDetail>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            impedit.
          </AccordionDetail>
        </AccordionItem>
        <AccordionItem isActive>
          <AccordionTitle>Praful</AccordionTitle>
          <AccordionDetail>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
            necessitatibus, magnam aut deserunt architecto accusantium
            laudantium numquam corrupti non suscipit iusto atque quibusdam nemo
            unde dolorem deleniti consectetur soluta!
          </AccordionDetail>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
