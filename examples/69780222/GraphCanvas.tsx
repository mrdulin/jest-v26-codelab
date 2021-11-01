import React, { FC, useRef, useEffect } from 'react';

export interface IGraphicCanvas {
  draw: Function;
}

const GraphicCanvas: FC<IGraphicCanvas> = (props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      props.draw(context);
    }
  }, [props.draw]);
  return <canvas ref={canvasRef} />;
};

export default GraphicCanvas;
