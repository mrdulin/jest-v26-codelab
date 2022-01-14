import React, { useState, useRef, useEffect } from 'react';

interface Props {}

export enum EVENT_TYPE {
  MOUSEOVER = 'MOUSEOVER',
  MOUSEOUT = 'MOUSEOUT',
}

export const DeviceModule = (props: Props) => {
  const [isTooltipVisible, changeTooltipVisibility] = useState(false);
  const deviceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (deviceRef && deviceRef.current) {
      deviceRef.current.addEventListener(EVENT_TYPE.MOUSEOVER, () => changeTooltipVisibility(true));
      deviceRef.current.addEventListener(EVENT_TYPE.MOUSEOUT, () => changeTooltipVisibility(false));
    }
    return () => {
      if (deviceRef && deviceRef.current) {
        deviceRef.current.removeEventListener(EVENT_TYPE.MOUSEOVER, () => changeTooltipVisibility(true));
        deviceRef.current.removeEventListener(EVENT_TYPE.MOUSEOUT, () => changeTooltipVisibility(false));
      }
    };
  });

  return <div ref={deviceRef}>my device module</div>;
};
