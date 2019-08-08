import React, { useState } from "react";
import Input from './Input';
import "./Toggle.css";

var Toggle = function Toggle(props) {
  var data = props.data,
      onChange = props.onChange;

  var handleChange = function handleChange(event) {
    if (onChange) {
      onChange(event);
    }
  };

  return React.createElement("div", {
    className: "Toggle"
  }, React.createElement(Input, {
    type: "radio",
    direction: "left",
    checked: data.left,
    onChange: function onChange() {
      return handleChange('left');
    }
  }), React.createElement(Input, {
    type: "radio",
    direction: "middle",
    checked: data.middle,
    onChange: function onChange() {
      return handleChange('middle');
    }
  }), React.createElement(Input, {
    type: "radio",
    direction: "right",
    checked: data.right,
    onChange: function onChange() {
      return handleChange('right');
    }
  }));
};

Toggle.defaultProps = {
  data: {
    left: false,
    right: false,
    middle: true
  }
};
export default Toggle;