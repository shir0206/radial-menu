import React, { useState } from "react";
import "./PrimaryImage.css";

export const PrimaryImage = (props) => {
  function handleError() {
    if (!props.galleryError) {
      props.setPrimary(null);
      props.setSecondary(null);
      props.setGalleryError(true);
    }
  }
  return (
    <>
      {props.primary && (
        <div className="primary-cont">
          <img
            className="primary-img"
            src={props.primary.url}
            alt={props.primary.label}
            onError={handleError}
          ></img>
        </div>
      )}
    </>
  );
};
