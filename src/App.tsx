import Switch from "components/switch/Switch";
import React, { useEffect, useState } from "react";
import "./App.css";
import Accordion from "components/accordion/Accordion";

function App() {
  const openIcon = React.createElement("div", { className: "open-icon" });
  const closeIcon = React.createElement("div", { className: "close-icon" });

  return (
    <div className="App">
      <Accordion
        title="hello"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  "
        openIcon={openIcon}
        closeIcon={closeIcon}
      />
    </div>
  );
}

export default App;
