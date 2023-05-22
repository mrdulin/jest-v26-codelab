import React from "react";
import { useMediaQuery } from "react-responsive";

const MyComponent = () => {
  const isSM = useMediaQuery({ maxWidth: 767 });
  const isMD = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLG = useMediaQuery({ minWidth: 1024 });

  console.log(`isSM:${isSM} isMD:${isMD} isLG:${isLG}`);

  return <>{`isSM:${isSM} isMD:${isMD} isLG:${isLG}`}</>;
};

export default MyComponent;
