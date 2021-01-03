import "./App.css";

import { useEffect, useState } from "react";
import { NodeList } from "./components/NodeList";
import { Gallery } from "./components/Gallery";

function App() {
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState([]);
  const [galleryError, setGalleryError] = useState(false);

  useEffect(() => {
    if (!galleryError) {
      setGalleryError(true);
    }
  }, [galleryError]);

  return (
    <div className="App">
      <NodeList setPrimary={setPrimary} setSecondary={setSecondary}></NodeList>
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
