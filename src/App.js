import "./App.css";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Node } from "./components/Node";
import { Gallery } from "./components/Gallery";
import getData from "./GetData";

function App() {
  // const [dataLevel, setDataLevel] = useState({
  //   children: [{}],
  //   label: "a",
  //   type: 0,
  // });

  const [nodeLabel, setNodeLabel] = useState("");
  const [nodeChildren, setNodeChildren] = useState([]);
  const [nodeType, setNodeType] = useState(0);
  const [currNode, setCurrNode] = useState("");

  const [currImage, setCurrImage] = useState(null);
  //setDataLevel(getData);
  useEffect(() => {
    const baseUrl = "http://18.203.83.17/public/explorePictures?path=root";
    const props = "";
    const receiptUrl = props ? baseUrl + "/" + props : baseUrl;
    const clientToken = "2d4e69f4823176197ccf41caa5ee6456";

    axios
      .get(baseUrl, {
        json: true,
        headers: { "X-TOKEN": clientToken },
      })
      .then(function (response) {
        // handle success
        console.log(response);
        // setDataLevel(response.data.data);
        setNodeLabel(response.data.data.label);
        setNodeChildren(response.data.data.children);
        setNodeType(response.data.data.type);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return window.alert("error");
      });
  }, []);

  return (
    <div className="App">
      <Node
        nodeType={nodeType}
        nodeLabel={nodeLabel}
        currNode={currNode}
        setCurrNode={setCurrNode}
      ></Node>
      <Gallery></Gallery>
      <p>{nodeLabel}</p>
    </div>
  );
}

export default App;
