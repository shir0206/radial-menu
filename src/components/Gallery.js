import React, { useState } from "react";
import "./Gallery.css";
import { PrimaryImage } from "./PrimaryImage";
import { SecondaryImageList } from "./SecondaryImageList";

export const Gallery = (props) => {
  if (props.galleryError) return null;

  return (
    <>
      <PrimaryImage
        primary={props.primary}
        setGalleryError={props.setGalleryError}
        setPrimary={props.setPrimary}
        setSecondary={props.setSecondary}
      ></PrimaryImage>
      {props.secondary && (
        <SecondaryImageList
          primary={props.primary}
          secondary={props.secondary}
          setPrimary={props.setPrimary}
          setSecondary={props.setSecondary}
        ></SecondaryImageList>
      )}
    </>
  );
};
