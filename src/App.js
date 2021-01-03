import "./App.css";

import { useEffect, useState } from "react";
import { Node } from "./components/Node";
import { Gallery } from "./components/Gallery";

function App() {
  const [clickedChildren, setClickedChildren] = useState([false]);
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState([]);
  const [galleryError, setGalleryError] = useState(false);

  const arr = [];

  useEffect(() => {
    if (!galleryError) {
      setGalleryError(true);
    }
  }, [galleryError]);

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
          setGalleryError={setGalleryError}
        ></Gallery>
      )}
    </div>
  );
}

export default App;
