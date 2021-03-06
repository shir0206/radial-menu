import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Icon } from "../icons/Icon";

import { useWindowDimensions } from "../hooks/useWindowDimensions";

import "./Node.css";

export const Node = (props) => {
  const [clickedChildren, setClickedChildren] = useState([]);
  const [currNodeLabel, setCurrNodeLabel] = useState(props.label);
  const [currNodeChildren, setCurrNodeChildren] = useState([]);

  const baseUrl = "http://18.203.83.17/public/explorePictures?path=";
  const receiptUrl = props.label ? baseUrl + "/" + props.label : baseUrl;
  const clientToken = "2d4e69f4823176197ccf41caa5ee6456";

  useEffect(() => {
    if (props.galleryError) {
      props.setGalleryError(false);
    }
  }, [props.galleryError]);

  const getData = useCallback(async () => {
    try {
      // Get result from server
      const result = await axios.get(`${receiptUrl}`, {
        json: true,
        headers: { "X-TOKEN": clientToken },
      });

      // Get next children nodes to the state
      const resultData = result.data.data;
      setCurrNodeChildren(resultData);

      // Update the parent's "clicks" array:
      // Turn on the flag that the current node is clicked
      // Turn off the flags for all the other siblings.
      // Such that if the sibling's menu was open it would close.
      props.setClickedChildren((clickedChildren) => {
        let clickedChildrenArray = new Array(clickedChildren.length).fill(
          false
        );
        clickedChildrenArray[props.index] = true;
        return clickedChildrenArray;
      });

      // Init gallery
      if (resultData.type === 1) {
        // Set the current clicked picture node as primary image
        const primaryImage = { label: resultData.label, url: resultData.url };
        props.setPrimary(primaryImage);

        // Set the siblings of the current clicked picture node as secondary images
        let scondaryImages = [];
        props.siblings
          .filter((child) => child.type == 1 && child.label != resultData.label)
          .map((filteredImage) => {
            let secondaryImage = {
              label: filteredImage.label,
              url: filteredImage.url,
            };
            scondaryImages.push(secondaryImage);
          });
        props.setSecondary(scondaryImages);
      } else {
        props.setPrimary(null);

        props.setSecondary([]);
      }
    } catch (err) {
      // Request fail
      window.alert(err.message);
    }
  });

  const { height, width } = useWindowDimensions();

  const calcPosition = (level, nodesInLevel, currNode) => {
    if (props.label === "root") return;
    if (!currNodeChildren) return;

    // Arc level radius
    const radiusWeight = width < 600 ? 7 : 4;
    let r = (level + 1) * radiusWeight;

    // The quantity of nodes in the current level
    let n = nodesInLevel;

    // The current node index
    let i = currNode;

    // The current node angle
    let a = (Math.PI / 2 / (n + 1)) * i;

    // Calculate the current node position on the arc
    let x = Math.abs(r * Math.cos(a));
    let y = Math.abs(r * Math.sin(a));

    // Translate the node to the calculated position on the arc
    let style = "translate(" + x + "vw, " + y + "vw)";

    return style;
  };

  // Set the current node level according to the path's "/" char
  const level = currNodeLabel.split("/").length;

  // Set the current node level according to the path's "/" char
  const nodesInLevel = props.siblings.length;

  const currNode = props.index;

  return (
    <>
      <button
        className={
          props.label === "root"
            ? "root"
            : props.type === 0
            ? props.clickedChildren[props.index]
              ? "clicked-folder"
              : "folder"
            : props.clickedChildren[props.index]
            ? "clicked-picture"
            : "picture"
        }
        style={{ transform: calcPosition(level, nodesInLevel, currNode) }}
        onClick={getData}
      >
        <Icon></Icon>
      </button>
      {props.clickedChildren[props.index] && !props.galleryError && (
        <ul className="nodes">
          {currNodeChildren.children &&
            currNodeChildren.children.map((nodeChild, index) => (
              <Node
                key={nodeChild.label}
                index={index}
                type={nodeChild.type}
                label={currNodeLabel + "/" + nodeChild.label.toString()}
                siblings={currNodeChildren.children}
                clickedChildren={clickedChildren}
                setClickedChildren={setClickedChildren}
                setPrimary={props.setPrimary}
                setSecondary={props.setSecondary}
                galleryError={props.galleryError}
                setGalleryError={props.setGalleryError}
              ></Node>
            ))}
        </ul>
      )}
    </>
  );
};
