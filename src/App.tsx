import Switch from "components/switch/Switch";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ margin: "24px" }}>
        <Switch />
      </div>
      <Switch />
    </div>
  );
}

export default App;
