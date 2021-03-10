import { getFontSize } from './dependancy';

const stripUnit = (val) => val;
const em = (px, fontSize) => px + fontSize;

const initPxToEm = () => {
  let fontSize;
  return (px) => {
    if (!fontSize) {
      fontSize = getFontSize();
    }
    return stripUnit(em(px, fontSize));
  };
};
const pxToEm = initPxToEm();
const doSomething = () => pxToEm(window.innerWidth);

export default { doSomething };
