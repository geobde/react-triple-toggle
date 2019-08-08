import React, { useState } from "react";
import Input from './Input';
import "./Toggle.css";


const Toggle = props => {

  const {  data, onChange, step } = props;

  const handleChange = (event) => {
     if (onChange) {
        onChange(event)
     }
  };

  return (
    <div className="Toggle">
        <Input type="radio" direction="left"   step={step} checked={data.left} onChange={() => handleChange('left')}  />
        <Input type="radio" direction="middle" step={step} checked={data.middle} onChange={() => handleChange('middle')} />
        <Input  type="radio" direction="right" step={step} checked={data.right} onChange={() => handleChange('right')} />
    </div>
  )
};

export default Toggle;