import React, { useState } from "react";
import "./ButtonNav.css";

export const ButtonNav = (props) => {
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
