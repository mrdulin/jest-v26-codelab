import { Auth, getAuth } from 'firebase/auth';
import { signOutUser } from './';

jest.mock('firebase/auth');

describe('70646844', () => {
  test('should pass', async () => {
    const mAuth = ({
      signOut: jest.fn(),
    } as unknown) as Auth;
    (getAuth as jest.MockedFunction<typeof getAuth>).mockReturnValue(mAuth);

    await signOutUser();
    expect(getAuth).toBeCalledTimes(1);
    expect(getAuth().signOut).toBeCalledTimes(1);
  });
});
