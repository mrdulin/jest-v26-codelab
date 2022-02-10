import spacetime from 'spacetime';

jest.mock('spacetime', () => ({
  now: jest.fn(() => {
    return {
      time: jest.fn().mockReturnThis(),
      endOf: jest.fn(),
    };
  }),
}));

describe('71058923', () => {
  test('should pass', () => {
    let now = spacetime.now('Europe/Paris');
    now = now.time('12:00am');
    expect(spacetime.now).toBeCalledWith('Europe/Paris');
  });
});
