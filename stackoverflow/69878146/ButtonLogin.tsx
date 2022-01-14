import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLogin() {
  return (
    <Link to="/login">
      <button className="button-login">Iniciar sesión</button>
    </Link>
  );
}

export default ButtonLogin;
