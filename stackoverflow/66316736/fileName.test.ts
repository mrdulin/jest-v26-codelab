import { lockNextCardIfUncompleted } from './fileName';

test('should return locked', () => {
  expect(lockNextCardIfUncompleted([{ Type: 'A' }])).toBe(false);
  expect(lockNextCardIfUncompleted([{ Type: 'Testing' }])).toBe(true);
});
