import "./App.css";

import { useState } from "react";
import { NodeList } from "./components/NodeList";
import { Gallery } from "./components/Gallery";

function App() {
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState([]);
  const [galleryError, setGalleryError] = useState(false);

  return (
    <div className="App">
      <NodeList
        setPrimary={setPrimary}
        setSecondary={setSecondary}
        galleryError={galleryError}
        setGalleryError={setGalleryError}
      ></NodeList>

      {primary && (
        <Gallery
          primary={primary}
          secondary={secondary}
          setPrimary={setPrimary}
          setSecondary={setSecondary}
          setGalleryError={setGalleryError}
          galleryError={galleryError}
        ></Gallery>
      )}
    </div>
  );
}

export default App;
