import "./App.css";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Node } from "./components/Node";
import { Gallery } from "./components/Gallery";

function App() {
  const [clickedChildren, setClickedChildren] = useState([false]);
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState([]);

  console.log("primary=", primary);
  console.log("secondary=", secondary);

  const arr = [];
  return (
    <div className="App">
      <ul className="nodes-cont">
        <Node
          className={"root"}
          index={0}
          label={"root"}
          type={"0"}
          siblings={arr}
          clickedChildren={clickedChildren}
          setClickedChildren={setClickedChildren}
          setPrimary={setPrimary}
          setSecondary={setSecondary}
        ></Node>
      </ul>
      <Gallery primary={primary} secondary={secondary}></Gallery>
    </div>
  );
}

export default App;
