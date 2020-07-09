import React, { Component } from "react";
import Display from "../display/Display";
import Button from "../button/Button";
import classes from "./Calculator.module.css";

export default class Calculator extends Component {
  render() {
    return (
      <div className={classes.Calculator}>
        <Display />
        <Button />
      </div>
    );
  }
}
