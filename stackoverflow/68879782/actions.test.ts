import { Utils } from './utils';
import { Actions } from './actions';

describe('actions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('success', async () => {
    const actionSpy = jest.spyOn(Utils.prototype, 'action').mockResolvedValueOnce(false);
    const actions = new Actions();
    await actions.readFile();
    expect(actionSpy).toHaveBeenCalledWith(5);
  });
});
