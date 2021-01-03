import React, { useState } from "react";
import "./Gallery.css";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";

export const Gallery = (props) => {
  return (
    <>
      <Primary primary={props.primary}></Primary>
      {props.secondary && (
        <>
          <h4>The Gallery:</h4>
          <div className="gallery-cont">
            <div className="secondary-cont">
              <ul id="gallery" className="gallery">
                {props.secondary.map((secondaryImg) => (
                  <Secondary
                    key={secondaryImg.label}
                    secondaryImg={secondaryImg}
                    secondary={props.secondary}
                    primary={props.primary}
                    setPrimary={props.setPrimary}
                    setSecondary={props.setSecondary}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
