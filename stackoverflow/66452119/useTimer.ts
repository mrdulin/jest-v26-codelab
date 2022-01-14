import React, { useEffect, useState } from 'react';

const useTimer = (startTimeSec: number, cb: (currentSeconds: number) => string = (c) => ''): [number, string] => {
  const [timer, setTimer] = useState(startTimeSec);
  const [intervalTime, setIntervalTime] = useState<null | number>(null);
  const [message, setMessage] = useState<string>('');
  const callback = React.useRef(cb);

  useEffect(() => {
    if (startTimeSec) {
      setTimer(startTimeSec);
      setMessage(callback.current(timer));
    }
  }, [startTimeSec]);

  return [timer, message];
};

export { useTimer };
