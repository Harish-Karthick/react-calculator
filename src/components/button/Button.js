import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  function handleClick() {
    props.clicked(props.value);
  }
  return (
    <button
      className={classes.Button}
      style={{ ...props.buttonStyle }}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}
