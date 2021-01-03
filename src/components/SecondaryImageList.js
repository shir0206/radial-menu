import React, { useState } from "react";
import "./Gallery.css";
import { SecondaryImage } from "./SecondaryImage";

export const SecondaryImageList = (props) => {
  return (
    <>
      <h4>The Gallery:</h4>
      <div className="gallery-cont">
        <div className="secondary-cont">
          <ul id="gallery" className="gallery">
            {props.secondary.map((secondaryImg) => (
              <SecondaryImage
                key={secondaryImg.label}
                secondaryImg={secondaryImg}
                primary={props.primary}
                secondary={props.secondary}
                setPrimary={props.setPrimary}
                setSecondary={props.setSecondary}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
