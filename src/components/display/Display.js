import React from "react";
import classes from "./Display.module.css";

export default function Display(props) {
  return (
    <div className={classes.Display}>
      <p className={classes.PreviousDigits}>{props.previousDigits}</p>
      <p className={classes.CurrentDigits}>{props.currentDigits}</p>
    </div>
  );
}
