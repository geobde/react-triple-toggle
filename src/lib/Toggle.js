import React, {useState} from "react";
import PropTypes from 'prop-types';
import Input from './Input';
import "./Toggle.css";


const Toggle = props => {
  let [data, setData] = useState(props.data);

  const handleChange = (event) => {
     if (props.onChange) {
        props.onChange(event);
     } else {
       switch(event) {
        case "left":
        return setData({ left:true, right:false, middle:false });
        case "middle":
        return  setData({ left:false, right:false, middle:true });
        case "right":
        return setData({ left:false, right:true, middle:false });
        default:
        return event;
      }
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