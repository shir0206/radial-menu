import "./App.css";

import { useState } from "react";
import { Node } from "./components/Node";
import { Gallery } from "./components/Gallery";

function App() {
  const [clickedChildren, setClickedChildren] = useState([false]);
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState([]);

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
      {primary && (
        <Gallery
          primary={primary}
          secondary={secondary}
          setPrimary={setPrimary}
          setSecondary={setSecondary}
        ></Gallery>
      )}
    </div>
  );
}

export default App;
