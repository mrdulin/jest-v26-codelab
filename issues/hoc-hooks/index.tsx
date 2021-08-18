import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const IsFavorited = (Component) => {
  return function Wrapper(props) {
    const count = useSelector((state: any) => state.favourite.value);

    if (count === 1) {
      return <Component {...props} />;
    }
    return <span>No render</span>;
  };
};

const CardLong = IsFavorited((props) => {
  const count = useSelector((state: any) => state.favourite.value);
  console.log('cardlong props.name:', props.name);
  const dispatch = useDispatch();
  return <div>card long</div>;
});

export default CardLong;
