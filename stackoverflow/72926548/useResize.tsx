 import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

type UseResizeProps = {
  minWidth: number;
  maxWidth: number;
};

type UseResizeReturn = {
  width: number;
  enableResize: () => void;
  disableResize: () => void;
  isResizing: boolean;
  resize: (e: MouseEvent) => void;
  setWidth: Dispatch<SetStateAction<number>>;
};

const useResize = ({ minWidth, maxWidth }: UseResizeProps): UseResizeReturn => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(minWidth);

  const enableResize = useCallback(() => {
    setIsResizing(true);
  }, [setIsResizing]);

  const disableResize = useCallback(() => {
    setIsResizing(false);
  }, [setIsResizing]);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth =
          document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
        if (newWidth > minWidth && newWidth < maxWidth) {
          setWidth(newWidth);
        }
      }
    },
    [minWidth, maxWidth, isResizing, setWidth],
  );

  useEffect(() => {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', disableResize);

    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', disableResize);
    };
  }, [disableResize, resize]);

  return {
    width,
    enableResize,
    isResizing,
    disableResize,
    resize,
    setWidth,
  };
};

export default useResize;