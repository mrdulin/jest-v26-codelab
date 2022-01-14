import GraphicCanvas, { IGraphicCanvas } from './GraphCanvas';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
configure({ adapter: new Adapter() });

describe('GraphicCanvas', () => {
  let props: IGraphicCanvas;
  beforeEach(() => {
    props = { draw: jest.fn() };
  });
  it('calls function drawCircle passed in props as draw', () => {
    HTMLCanvasElement.prototype.getContext = jest.fn();
    mount(<GraphicCanvas {...props} />);
    expect(props.draw).toHaveBeenCalled();
  });
});
