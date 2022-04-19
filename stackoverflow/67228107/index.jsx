import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

export const Context = React.createContext();
const defaultLocale = navigator.language;

export const LocalizationWrapper = (props) => {
  const [locale, setLocale] = useState(defaultLocale);

  function changeLocale(newLocale) {
    setLocale(newLocale);
  }

  return (
    <Context.Provider value={{ locale, changeLocale }}>
      <IntlProvider locale={locale}>{props.children}</IntlProvider>
    </Context.Provider>
  );
};
