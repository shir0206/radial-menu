import React, { useState } from "react";
import "./Gallery.css";
import { PrimaryImage } from "./PrimaryImage";
import { SecondaryImage } from "./SecondaryImage";

export const Gallery = (props) => {
  return (
    <>
      <PrimaryImage primary={props.primary}></PrimaryImage>
      {props.secondary && (
        <>
          <h4>The Gallery:</h4>
          <div className="gallery-cont">
            <div className="secondary-cont">
              <ul id="gallery" className="gallery">
                {props.secondary.map((secondaryImg) => (
                  <SecondaryImage
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
