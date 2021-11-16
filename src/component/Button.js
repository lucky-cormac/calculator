import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    const { name, clickHandler } = this.props;
    clickHandler(name);
  };

  render() {
    const { name, wide, orange } = this.props;
    const className = classNames("component-button", { wide, orange });

    return (
      <div className={className}>
        <button onClick={this.handleClick}>{name}</button>
      </div>
    );
  }
}
