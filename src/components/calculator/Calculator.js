import React, { Component } from "react";
import Display from "../Display/Display";
import AllButtons from "../AllButton/AllButtons";
import classes from "./Calculator.module.css";
import * as variables from "../../helpers/ButtonVariables";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousExpression: "",
      currentExpression: "",
      operation: "",
    };
    this.numberInput = this.numberInput.bind(this);
    this.operationInput = this.operationInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
  }
  numberInput(number) {
    if (number === "." && this.state.currentExpression.includes(".")) return;
    this.setState((st) => {
      return { currentExpression: st.currentExpression + number };
    });
  }
  operationInput(operation) {
    if (
      this.state.currentExpression === "" &&
      this.state.previousExpression === ""
    )
      return;
    if (
      this.state.previousExpression !== "" &&
      this.state.currentExpression !== ""
    ) {
      let result = this.calculate().toString();
      if (operation === "=") {
        this.setState({
          operation: "",
          previousExpression: "",
          currentExpression: result,
        });
        return;
      } else {
        this.setState({
          previousExpression: result,
          currentExpression: "",
          operation,
        });
        return;
      }
    }
    if (
      this.state.currentExpression === "" &&
      this.state.previousExpression !== "" &&
      operation !== "="
    ) {
      this.setState({ operation });
      return;
    }
    if (this.state.currentExpression !== "" && operation !== "=") {
      this.setState((st) => {
        return {
          operation,
          previousExpression: st.currentExpression,
          currentExpression: "",
        };
      });
    }
  }
  clearInput() {
    this.setState({
      previousExpression: "",
      currentExpression: "",
      operation: "",
    });
  }
  deleteInput() {
    this.setState((st) => {
      let expressionArray = Array.from(st.currentExpression);
      expressionArray.splice(-1, 1);
      return {
        currentExpression: expressionArray.join(""),
      };
    });
  }
  calculate() {
    let calculatedValue;
    const floatNumber1 = parseFloat(this.state.previousExpression);
    const floatNumber2 = parseFloat(this.state.currentExpression);
    switch (this.state.operation) {
      case "+": {
        calculatedValue = floatNumber1 + floatNumber2;
        break;
      }
      case "-": {
        calculatedValue = floatNumber1 - floatNumber2;
        break;
      }
      case "×": {
        calculatedValue = floatNumber1 * floatNumber2;
        break;
      }
      case "÷": {
        calculatedValue = floatNumber1 / floatNumber2;
        break;
      }
      default:
        break;
    }
    return calculatedValue;
  }
  componentDidMount() {
    this.clearInput();
  }
  render() {
    return (
      <div className={classes.Calculator}>
        <Display
          previousDigits={
            this.state.previousExpression + " " + this.state.operation
          }
          currentDigits={this.state.currentExpression}
        />
        <AllButtons
          digits={[...variables.digits]}
          operations={[...variables.operations]}
          numberClick={this.numberInput}
          operationClick={this.operationInput}
          clearClick={this.clearInput}
          deleteClick={this.deleteInput}
          deleteButton={{ ...variables.deleteOption }}
          allClearButton={{ ...variables.allClear }}
          equalsButton
        />
      </div>
    );
  }
}
