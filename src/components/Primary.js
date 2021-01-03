import React, { useState } from "react";
import "./Primary.css";

export const Primary = (props) => {
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
