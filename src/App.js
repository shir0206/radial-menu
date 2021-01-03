import "./App.css";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Node } from "./components/Node";
import { Gallery } from "./components/Gallery";

function App() {
  const [clickedChildren, setClickedChildren] = useState([false]);

  const arr = [];
  return (
    <div className="App">
      <ul className="nodes">
        <Node
          className={"root"}
          index={0}
          label={"root"}
          type={"0"}
          siblings={arr}
          clickedChildren={clickedChildren}
          setClickedChildren={setClickedChildren}
        ></Node>
      </ul>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
