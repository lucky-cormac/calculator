import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import "./ButtonPanel.css";

const buttonsConfig = [
  [{
    name: "AC"
  }, {
    name: "+/-"
  }, {
    name: "%"
  }, {
    name: "÷",
    orange: true
  }],
  [{
    name: "7"
  }, {
    name: "8"
  }, {
    name: "9"
  }, {
    name: "x",
    orange: true
  }],
  [{
    name: "4"
  }, {
    name: "5"
  }, {
    name: "6"
  }, {
    name: "-",
    orange: true
  }],
  [{
    name: "1"
  }, {
    name: "2"
  }, {
    name: "3"
  }, {
    name: "+",
    orange: true
  }],
  [{
    name: "0",
    wide: true
  }, {
    name: "."
  }, {
    name: "=",
    orange: true
  }]
];

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  render() {
    const { clickHandler } = this.props;
    return (
      <div className="component-button-panel">
        {buttonsConfig.map((buttonsRow, index) => (
          <div key={`row_${index}`}>
            {buttonsRow.map((button) => (
              <Button key={button.name} clickHandler={clickHandler} {...button} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
