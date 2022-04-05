import { Service } from './';

describe('71733187', () => {
  test('should pass', async () => {
    const mockDate = new Date(1466424490000);
    jest.spyOn(global, 'Date').mockReturnValue(mockDate as any);
    const svc = new Service();
    const actual = await svc.mainfunction();
    expect(actual).toEqual('/tmp/somethin/1466424490000');
  });
});
