import React from "react";

import PropTypes from 'prop-types';

const Input = ({name, title, inputType, value, handleChange, placeholder}) => {
  return (
    <div>
      <label htmlFor={name}>
        {title}
      </label>
      <input
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = ({
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired
})

export default Input;
