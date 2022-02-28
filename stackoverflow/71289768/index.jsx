import React from 'react';
import Cookies from 'js-cookie';
import isValid from './helpers/isValid';
import A from './A';
import B from './B';
import C from './C';

function AComponent(props) {
  return createComponent(props);
}

export const createComponent = ({ data }) => {
  const [valid, setValid] = React.useState(false);
  const [cookie, setCookie] = React.useState(undefined);

  React.useEffect(() => {
    if (data) {
      const check = async () => isValid();
      check().then((result) => setValid(result));
    }
    setCookie(!!Cookies.get('my-cookie'));
  }, []);

  if (cookie) {
    return <A />;
  } else if (valid) {
    return <B />;
  }
  return <C />;
};

export default AComponent;
