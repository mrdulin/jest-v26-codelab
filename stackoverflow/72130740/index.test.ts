import { User } from './';
import { regex } from 'uuidv4';

describe('User', () => {
  it('should call uuid() when no id is provided', () => {
    const user = new User('Foo', 'foo@bar.com', '12345');
    expect(regex.v4.test(user.id!)).toBeTruthy();
  });
});
