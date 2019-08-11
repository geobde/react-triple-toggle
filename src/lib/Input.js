import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";


const Input = props => {
  let { type, checked, onChange, direction } = props;
 
  return (
	  <div className="Input">
		<input
		 type={type}
		 className={checked ? `radio ${direction} checked` : 'radio'}
		 checked={checked}
		 onChange={onChange}
		/>
	    <div class="checkmark"></div>
		</div>
  )
};

Input.propTypes = {
    type: PropTypes.string,
	checked: PropTypes.bool,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    type: 'text',
    checked: false
};

export default Input;