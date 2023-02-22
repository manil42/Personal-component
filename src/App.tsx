import Switch from "components/switch/Switch";
import React, { useEffect, useState } from "react";
import "./App.css";
import Accordion from "components/accordion/Accordion";
import AccordionItem from "components/accordion/accordionItem/AccordionItem";
import { AccordionTitle } from "components/accordion/accordionTitle/AccordionTitle";
import { AccordionDetail } from "components/accordion/accordionDetail/AccordionDetail";
import RadioGroup from "components/radiogroup/RadioGroup";
import Radio from "components/radiogroup/radio/Radio";
function App() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const radioChangeHandler = (e: any) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="App">
      <RadioGroup row>
        <Radio onChange={radioChangeHandler} value="1" label="radio1" />
        <Radio onChange={radioChangeHandler} value="2" label="radio2" />
        <Radio onChange={radioChangeHandler} value="2" label="radio3" />
      </RadioGroup>
    </div>
  );
}

export default App;
