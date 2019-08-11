import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";


const Input = props => {
  let { type, checked, disabled, onChange, direction } = props;
 
  return (
	  <div className="Input">
		<input
		 type={type}
		 disabled={disabled}
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
    checked: true
};

export default Input;