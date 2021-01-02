import "./App.css";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Node } from "./components/Node";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <ul className="nodes">
        <Node label={"root"} type={"root"}></Node>
      </ul>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
