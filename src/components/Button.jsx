import React from "react";
import PropTypes from 'prop-types';

const Button = ({handleClick,title}) => {
    return (
        <button onClick={handleClick}>
            {title}
        </button>
    );
};

Button.propTypes = ({
      handleClick: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired
  })

export default Button;
