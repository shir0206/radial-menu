import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "./Node.css";

export const Node = (props) => {
  const [click, setClick] = useState(false);
  const [currNodeType, setCurrNodeType] = useState(props.type);
  const [currNodeLabel, setCurrNodeLabel] = useState(props.label);
  const [currNodeChildren, setCurrNodeChildren] = useState([]);
  const [requestError, setRequestError] = useState();

  const baseUrl = "http://18.203.83.17/public/explorePictures?path=";
  const receiptUrl = props.label ? baseUrl + "/" + props.label : baseUrl;
  const clientToken = "2d4e69f4823176197ccf41caa5ee6456";

  const getData = useCallback(async () => {
    try {
      const result = await axios.get(`${receiptUrl}`, {
        json: true,
        headers: { "X-TOKEN": clientToken },
      });
      console.log("inside try");

      const resultData = result.data.data;
      setCurrNodeChildren(resultData);
      setClick(true);
      console.log("inside try=", resultData);
    } catch (err) {
      setRequestError(err.message);
      window.alert(err.message);
    }
  });

  const translateposition = (level, nodesInLevel, currNode) => {
    let r = (level + 1) * 20;
    let n = nodesInLevel;
    let i = currNode;

    let a = 270 + (90 / (n + 1)) * i;
    let x = r * Math.cos(a);
    let y = r * Math.sin(a);
    let style = "translate(" + x + "px, " + y + "px)";
    return style;
  };

  const level = currNodeLabel.split("/").length;
  const nodesInLevel = currNodeChildren.length;
  const currNode = props.index;
  return (
    <>
      <button
        className={
          props.type === 0 ? (click ? "clicked-folder" : "folder") : "picture"
        }
        style={{ transform: translateposition(level, nodesInLevel, currNode) }}
        onClick={getData}
      >
        {level}
      </button>
      {click && (
        <ul className="nodes">
          {currNodeChildren.children &&
            currNodeChildren.children.map((nodeChild, index) => (
              <Node
                key={nodeChild.label}
                index={index}
                label={currNodeLabel + "/" + nodeChild.label.toString()}
                type={nodeChild.type}
              ></Node>
            ))}
        </ul>
      )}
    </>
  );
};
