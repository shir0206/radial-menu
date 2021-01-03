import React, { useState } from "react";
import "./Secondary.css";

export const Secondary = (props) => {
  return (
    <>
      {props.secondary && (
        <div className="secondary-cont">
          <img
            className="secondary-img"
            src={props.secondary.url}
            alt={props.secondary.label}
          ></img>
        </div>
      )}
    </>
  );
};
