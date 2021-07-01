import { EventController } from './';

describe('68199289', () => {
  it('should pass', () => {
    jest.spyOn(EventController.prototype, 'getEventHis').mockReturnValueOnce(['a', 'b']);
    const event = new EventController();
    expect(event.getEventHis()).toEqual(['a', 'b']);
  });
});
