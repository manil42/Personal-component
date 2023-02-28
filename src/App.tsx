import Tooltip from "components/tooltip/Tooltip";
import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "components/button/Button";
function App() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "100px", left: "150px" }}>
        <Tooltip description="header2" direction="bottom">
          <Button label="button button" varient="contained" />
        </Tooltip>
      </div>
      <Button label="button button button" varient="contained" />
    </div>
  );
}

export default App;
