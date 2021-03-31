import { main } from './';

describe('dispatch event', () => {
  it('should dispatch touch start event', () => {
    const div = document.createElement('div');
    main(div);
    const e = new TouchEvent('touchstart', { touches: [] });
    div.dispatchEvent(e);
  });
});
