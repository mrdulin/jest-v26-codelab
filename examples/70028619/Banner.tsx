import React, { useCallback } from 'react';

type Properties = {
  close: () => void;
  text: string;
};

const Banner: React.FC<Properties> = ({ close, text }) => {
  const onClick = useCallback(() => {
    close();
  }, [close, text]);

  return (
    <div className="BannerBox">
      <div className="banner">
        <span className="popup">
          {onClick}
          {close}[x]
        </span>
        {text}
      </div>
    </div>
  );
};
export default Banner;
