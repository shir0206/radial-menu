import React, { useState } from "react";
import "./Node.css";

export const Node = (props) => {
  return (
    <button
      className={props.type}
      onClick={() => {
        const lastFolder = props.currNode.split("/");
        const length = lastFolder.length;

        if (lastFolder[length - 1] !== props.nodeLabel) {
          props.setCurrNode((currNode) => currNode + "/" + props.nodeLabel);
        }

        console.log(props.currNode);
        if (props.nodeType === 0) return;
        if (props.nodeType === 1) return;
      }}
    ></button>
  );
};
