import { execute } from './execute';
import { Processor } from './processor';

describe('Execute', () => {
  it('should process info', async () => {
    const processSpy = jest.spyOn(Processor, 'process').mockResolvedValueOnce('test-return');
    execute({ Records: [{ body: { info: 'test-info' } }] }, {});
    expect(processSpy).toHaveBeenCalled();
  });
});
