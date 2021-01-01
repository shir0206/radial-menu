import React, { useState } from "react";
import "./Gallery.css";

export const Gallery = (props) => {
  return (
    <>
      <div
        className={props.type}
        onClick={() => {
          if (props.type === 0) return;
          if (props.type === 1) return;
        }}
      ></div>
    </>
  );
};
