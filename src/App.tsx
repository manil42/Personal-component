import React, { useEffect, useState } from "react";
import Button from "components/button/Button";
import "./App.css";
function App() {
  function handleClick(event: MouseEvent) {
    console.log("Button clicked!");
  }

  function handleKeyPress(event: KeyboardEvent) {
    console.log("key pressed:", event.key);
  }

  return (
    <div className="App">
      <Button
        type="submit"
        onClick={handleClick}
        onDoubleClick={(event) => {
          console.log("double click");
        }}
        label="button"
        ariaDisabled
        ariaLabel="hello"
      />
    </div>
  );
}

export default App;
