import React, { useState } from "react";
import "./Gallery.css";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";

export const Gallery = (props) => {
  return (
    <>
      <Primary primary={props.primary}></Primary>
      <h4>The Gallery:</h4>
      <div className="gallery-cont">
        <div className="secondary-cont">
          <ul id="gallery" className="gallery">
            {props.secondary.map((secondaryImg) => (
              <Secondary key={secondaryImg.label} secondary={secondaryImg} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
