import React, { useState } from "react";
import "./PrimaryImage.css";

export const PrimaryImage = (props) => {
  return (
    <>
      {props.primary && (
        <div className="primary-cont">
          <img
            className="primary-img"
            src={props.primary.url}
            alt={props.primary.label}
          ></img>
        </div>
      )}
    </>
  );
};
