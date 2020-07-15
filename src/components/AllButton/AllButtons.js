import React, { Component } from "react";
import Button from "../Button/Button";
import classes from "./AllButtons.module.css";

export default class AllButtons extends Component {
  generateNumericButtons() {
    return this.props.digits.map((digit) => (
      <Button
        key={digit.symbol}
        buttonStyle={{
          ...digit.styles,
        }}
        value={digit.symbol}
        clicked={this.props.numberClick}
      >
        {digit.symbol}
      </Button>
    ));
  }
  generateOperationButtons() {
    return this.props.operations.map((operation) => (
      <Button
        key={operation.value}
        buttonStyle={{ ...operation.styles }}
        clicked={this.props.operationClick}
        value={operation.value}
      >
        <i className={operation.sign}></i>
      </Button>
    ));
  }
  render() {
    return (
      <div className={classes.ButtonGroup}>
        <Button
          buttonStyle={{ ...this.props.allClearButton.styles }}
          clicked={this.props.clearClick}
        >
          {this.props.allClearButton.value}
        </Button>
        <Button
          buttonStyle={{ ...this.props.deleteButton.styles }}
          clicked={this.props.deleteClick}
        >
          {this.props.deleteButton.value}
        </Button>
        {this.generateNumericButtons()}
        {this.generateOperationButtons()}
      </div>
    );
  }
}
