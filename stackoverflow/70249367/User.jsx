import React from 'react';
import { useSelector } from 'react-redux';

const selectUsername = (state) => state.user.name;
const selectAuthState = (state) => state.auth;

export const User = () => {
  const userID = useSelector(selectUsername);
  const authState = useSelector(selectAuthState);
  const { isLoading } = useSelector((state) => state.user);

  const handleAuth = (e) => {
    e.preventDefault();
  };

  if (isLoading) {
    return (
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    );
  } else if (authState) {
    return (
      <a
        id="reddit-username"
        target="_blank"
        rel="noreferrer"
        href={`https://www.reddit.com/user/${userID}`}
        aria-label="Current user ID"
      >
        {userID}
      </a>
    );
  } else {
    return (
      <a id="reddit-username" href="/" onClick={handleAuth} aria-label="Connect the web app with your Reddit account">
        Link with Reddit
      </a>
    );
  }
};
