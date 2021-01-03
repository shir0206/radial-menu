import React, { useState } from "react";
import "./SecondaryImage.css";

export const SecondaryImage = (props) => {
  function handleClickOnSecondaryImage() {
    const primaryPrev = props.primary;

    const primaryNew = {
      label: props.secondaryImg.label,
      url: props.secondaryImg.url,
    };
    props.setPrimary(primaryNew);

    let secondaryNew = props.secondary;
    secondaryNew.forEach(function (item, i) {
      if (
        item.label == props.secondaryImg.label &&
        item.url == props.secondaryImg.url
      )
        secondaryNew[i] = primaryPrev;
    });

    props.setSecondary(secondaryNew);
  }

  return (
    <>
      {props.secondaryImg && (
        <div className="secondary-cont">
          <img
            className="secondary-img"
            src={props.secondaryImg.url}
            alt={props.secondaryImg.label}
            onClick={handleClickOnSecondaryImage}
          ></img>
        </div>
      )}
    </>
  );
};
