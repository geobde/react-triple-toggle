import React from "react";
import "./Input.css";

var Input = function Input(props) {
  var type = props.type,
      checked = props.checked,
      disabled = props.disabled,
      onChange = props.onChange,
      direction = props.direction;
  return React.createElement("div", {
    className: "Input"
  }, React.createElement("input", {
    type: type,
    disabled: disabled,
    className: checked ? "radio ".concat(direction, " checked") : 'radio',
    checked: checked,
    onChange: onChange
  }), React.createElement("div", {
    class: "checkmark"
  }));
};

Input.defaultProps = {
  type: 'text',
  checked: true
};
export default Input;