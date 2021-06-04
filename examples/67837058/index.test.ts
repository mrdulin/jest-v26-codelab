import { myclass } from './';

describe('67837058', () => {
  it('should pass', () => {
    const executionContext = {
      switchToHttp: jest.fn().mockReturnThis(),
      getResponse: jest.fn().mockReturnThis(),
      headersSent: true,
    };
    const response = myclass.intercept(executionContext);
    expect(response).toBeTruthy();
  });
});
