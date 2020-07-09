import React, { Component } from "react";
import classes from "./Button.module.css";

export default class Button extends Component {
  static defaultProps = {
    digits: [
      {
        symbol: "1",
        styles: {
          gridRow: "3/4",
          gridColumn: "1/2",
        },
      },
      {
        symbol: "2",
        styles: {
          gridRow: "3/4",
          gridColumn: "2/3",
        },
      },
      {
        symbol: "3",
        styles: {
          gridRow: "3/4",
          gridColumn: "3/4",
        },
      },
      {
        symbol: "4",
        styles: {
          gridRow: "2/3",
          gridColumn: "1/2",
        },
      },
      {
        symbol: "5",
        styles: {
          gridRow: "2/3",
          gridColumn: "2/3",
        },
      },
      {
        symbol: "6",
        styles: {
          gridRow: "2/3",
          gridColumn: "3/4",
        },
      },
      {
        symbol: "7",
        styles: {
          gridRow: "1/2",
          gridColumn: "1/2",
        },
      },
      {
        symbol: "8",
        styles: {
          gridRow: "1/2",
          gridColumn: "2/3",
        },
      },
      {
        symbol: "9",
        styles: {
          gridRow: "1/2",
          gridColumn: "3/4",
        },
      },
      {
        symbol: "0",
        styles: {
          gridRow: "4/5",
          gridColumn: "1/2",
        },
      },
    ],
    operations: [
      {
        sign: "fas fa-plus fa-2x",
        key: "+",
        styles: { gridRow: "4/5", gridColumn: "3/4" },
      },
      {
        sign: "fas fa-minus fa-2x",
        key: "-",
        styles: { gridRow: "3/4", gridColumn: "4/5" },
      },
      {
        sign: "fas fa-times fa-2x",
        key: "*",
        styles: { gridRow: "2/3", gridColumn: "4/5" },
      },
      {
        sign: "fas fa-divide fa-2x",
        key: "/",
        styles: { gridRow: "1/2", gridColumn: "4/5" },
      },
      {
        sign: "fas fa-equals fa-2x",
        key: "=",
        styles: { gridRow: "4/5", gridColumn: "4/5" },
      },
      {
        sign: "fas fa-circle",
        key: ".",
        styles: { gridRow: "4/5", gridColumn: "2/3" },
      },
    ],
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.generateNumericButtons = this.generateNumericButtons.bind(this);
    this.generateOperationButtons = this.generateOperationButtons.bind(this);
  }

  generateNumericButtons() {
    return this.props.digits.map((digit) => (
      <button
        key={digit.symbol}
        style={{
          ...digit.styles,
        }}
        className={classes.NumericButton}
      >
        {digit.symbol}
      </button>
    ));
  }

  generateOperationButtons() {
    return this.props.operations.map((operation) => (
      <button
        key={operation.key}
        style={{ ...operation.styles }}
        className={classes.OperationsButton}
      >
        <i className={operation.sign}></i>
      </button>
    ));
  }

  handleClick() {}
  render() {
    return (
      <div className={classes.ButtonGroup}>
        {this.generateNumericButtons()}
        {this.generateOperationButtons()}
      </div>
    );
  }
}
