import propTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom';

function Button (props) {
    const { to, name } = props;
    
    const styleClass = name === 'login' ? 'login' : 'Logout';

    const buttonElement = to ? (
        <Link to={to} className={styleClass}>
          {name}
        </Link>
      ) : (
        <button className={styleClass}>
          {name}
        </button>
      );
    
      return buttonElement;
}

Button.propTypes = {
    name: propTypes.string,
}

export default Button