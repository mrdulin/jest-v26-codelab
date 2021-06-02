export const getCanvasOptions = () => {
  const { devicePixelRatio } = window;
  const { scrollHeight, scrollWidth } = document.body;
  const ratio = devicePixelRatio < 2 ? devicePixelRatio : devicePixelRatio / 2;
  const width = scrollWidth * ratio;
  const height = scrollHeight * ratio;
  return {
    allowTaint: true,
    letterRendering: 1,
    foreignObjectRendering: true,
    quality: 1,
    width: width,
    height: height,
    scale: ratio,
    useCORS: true,
    ignoreElements: (node) => {
      return node.nodeName === 'NOSCRIPT';
    },
  };
};
