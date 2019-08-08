import React from "react";
import "./Input.css";

var Input = function Input(props) {
  var type = props.type,
      checked = props.checked,
      onChange = props.onChange,
      direction = props.direction;
  return React.createElement("div", {
    className: "Input"
  }, React.createElement("input", {
    type: type,
    className: checked ? "radio ".concat(direction, " checked") : 'radio',
    checked: checked,
    onChange: onChange
  }), React.createElement("div", {
    class: "checkmark"
  }));
};

Input.defaultProps = {
  type: 'text',
  checked: false
};
export default Input;