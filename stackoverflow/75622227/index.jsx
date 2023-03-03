import { useSelector } from 'react-redux';

export const Display = () => {
  const list = useSelector((state) => state.data.valueList);
  console.log("🚀 ~ file: index.jsx:5 ~ Display ~ list:", list)
  return null;
};
