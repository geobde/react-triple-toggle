import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from "react";
import Input from './Input';
import "./Toggle.css";

var Toggle = function Toggle(props) {
  var checked = props.checked,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      onChange = props.onChange;

  var _useState = useState(checked ? checked : defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    if (checked) {
      setData(checked);
    }
  }, [checked]);

  var handleInnerChange = function handleInnerChange(event) {
    switch (event) {
      case "left":
        return setData({
          left: true,
          right: false,
          middle: false
        });

      case "middle":
        return setData({
          left: false,
          right: false,
          middle: true
        });

      case "right":
        return setData({
          left: false,
          right: true,
          middle: false
        });

      default:
        return event;
    }
  };

  var handleChange = function handleChange(event) {
    if (onChange) {
      onChange(event);
    } else {
      handleInnerChange(event);
    }
  };

  return React.createElement("div", {
    className: "Toggle"
  }, React.createElement(Input, {
    type: "radio",
    direction: "left",
    disabled: disabled,
    checked: data.left,
    onChange: function onChange() {
      return handleChange('left');
    }
  }), React.createElement(Input, {
    type: "radio",
    direction: "middle",
    disabled: disabled,
    checked: data.middle,
    onChange: function onChange() {
      return handleChange('middle');
    }
  }), React.createElement(Input, {
    type: "radio",
    direction: "right",
    disabled: disabled,
    checked: data.right,
    onChange: function onChange() {
      return handleChange('right');
    }
  }));
};

Toggle.defaultProps = {
  defaultChecked: {
    left: false,
    right: false,
    middle: true
  },
  disabled: false
};
export default Toggle;