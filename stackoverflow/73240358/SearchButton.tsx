import React from 'react';
import { isUserLoggedIn, openLoginModal } from './utils';

export const SearchButton = ({ searchFunction }) => {
  const handleSubmit = async () => {
    try {
      const loggedIn = await isUserLoggedIn();

      if (loggedIn) {
        searchFunction();
      } else {
        openLoginModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <button id="search-button-submit" data-testid="search-button-submit" onClick={() => handleSubmit()} />;
};
