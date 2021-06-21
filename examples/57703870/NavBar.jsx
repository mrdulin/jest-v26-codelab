import React, { Fragment } from 'react';

export const NavBar = (props) => {
  const handleClick = (e, destination) => {
    e.preventDefault();
    props.history.push(`/${destination || ''}`);
  };

  const loginFormat =
    Object.keys(props.userDetails).length === 0 ? (
      <Fragment>
        <button onClick={(e) => handleClick(e, 'login')}>Login</button>
        <button onClick={(e) => handleClick(e, 'register')}>Register</button>
      </Fragment>
    ) : (
      // This button
      <button data-test="logout" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    );

  const handleLogout = (e) => {
    e.preventDefault();
    props.logoutUser();
    handleClick(e);
  };

  return (
    <header className="NavBar">
      <h2>PalettePicker</h2>
      <form className="navbar-form">{loginFormat}</form>
    </header>
  );
};
