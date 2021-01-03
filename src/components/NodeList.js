import React, { useState } from "react";
import { Node } from "./Node";
import "./NodeList.css";

export const NodeList = (props) => {
  const [clickedChildren, setClickedChildren] = useState([false]);
  const arr = [];

  return (
    <ul className="nodes-cont">
      <Node
        className={"root"}
        index={0}
        label={"root"}
        type={"0"}
        siblings={arr}
        clickedChildren={clickedChildren}
        setClickedChildren={setClickedChildren}
        setPrimary={props.setPrimary}
        setSecondary={props.setSecondary}
      ></Node>
    </ul>
  );
};
