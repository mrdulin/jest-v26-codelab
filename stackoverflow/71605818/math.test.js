const math = require('./math');

jest.mock('./math.js');

test('calls math.add', () => {
  math.add.mockReturnValue(3);
  math.add(1, 2);

  expect(jest.isMockFunction(math.add)).toBeTruthy();

  expect(math.add).toHaveBeenCalled();
  expect(math.add).toHaveBeenCalledWith(1, 2);
  expect(math.add).toHaveReturned();
  expect(math.add).toHaveReturnedWith(3);
});
