import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const { next, total } = this.state;
    const value = next || total || "0";

    return (
      <div className="component-app">
        <Display value={value} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
