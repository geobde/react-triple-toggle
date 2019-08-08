import React, {useState} from "react";
import PropTypes from 'prop-types';
import Input from './Input';
import "./Toggle.css";


const Toggle = props => {
   const {data, onChange} = props;

  const handleChange = (event) => {
     if (onChange) {
        onChange(event);
     } 
  };

  return (
    <div className="Toggle">
        <Input type="radio" direction="left"    checked={data.left} onChange={() => handleChange('left')}  />
        <Input type="radio" direction="middle"  checked={data.middle} onChange={() => handleChange('middle')} />
        <Input type="radio" direction="right"  checked={data.right} onChange={() => handleChange('right')} />
    </div>
  )
};


Toggle.propTypes = {
   data: PropTypes.object,
};

Toggle.defaultProps = {
   data:{left:false,right:false,middle:true}
};

export default Toggle;