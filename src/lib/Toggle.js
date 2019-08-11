import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import Input from './Input';
import "./Toggle.css";

const Toggle = props => {
   const {checked, defaultChecked, onChange} = props;
   let [data, setData] = useState(checked ? checked : defaultChecked);

   useEffect(() => {
     if (checked) {
       setData(checked);
     }
   },[checked]);

   const handleInnerChange = event => {
      switch (event) {
         case "left":
         return setData({ left: true, right: false, middle: false });
         case "middle":
         return setData({ left: false, right: false, middle: true });
         case "right":
         return setData({ left: false, right: true, middle: false });
         default:
         return event;
      }
   };

   const handleChange = (event) => {
     if (onChange) {
        onChange(event);
     } else {
        handleInnerChange(event);
     }
   };

   return (
    <div className="Toggle">
        <Input type="radio" direction="left"   checked={data.left} onChange={() => handleChange('left')}  />
        <Input type="radio" direction="middle" checked={data.middle} onChange={() => handleChange('middle')} />
        <Input type="radio" direction="right"  checked={data.right} onChange={() => handleChange('right')} />
    </div>
   )
};

Toggle.propTypes = {
   checked: PropTypes.object,
   defaultChecked: PropTypes.object,
};

Toggle.defaultProps = {
   defaultChecked:{
       left:false,
       right:false,
       middle:true
   }
};

export default Toggle;