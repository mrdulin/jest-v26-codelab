import { today } from './date';

jest.mock('./date', () => ({
  today: jest.fn(() => '01-01-2020'),
}));

it('should work properly', () => {
  expect(jest.isMockFunction(today)).toBeTruthy();
  expect(today()).toBe('01-01-2020');
});
