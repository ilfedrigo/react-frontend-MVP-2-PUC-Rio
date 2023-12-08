import propTypes from 'prop-types'
import React from 'react';

function LoginButton (props) {
    const { name, handleLoginClick } = props;
    
    const styleClass = name === 'login' ? 'login' : 'Logout';

    const buttonElement = (
        <button onClick={handleLoginClick} className={styleClass}>{name}  </button>
      );
    
      return buttonElement;
}

LoginButton.propTypes = {
    name: propTypes.string,
}

export default LoginButton