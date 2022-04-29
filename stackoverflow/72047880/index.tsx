import React, { useContext, useState } from 'react';

const ItemContext = React.createContext({
  selectedItem: null,
  setSelectedItem: (state) => {},
});

export const ApiStore = ({ children, value }) => {
  const [selectedItem, setSelectedItem] = useState(value);

  return <ItemContext.Provider value={{ selectedItem, setSelectedItem }}>{children}</ItemContext.Provider>;
};

export const IngredientExpanded = () => {
  const { selectedItem } = useContext(ItemContext);

  return <div>{selectedItem}</div>;
};
