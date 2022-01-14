const example = require('./example');
const got = require('got');

jest.mock('got');
const callback = jest.fn().mockImplementation((errorMsg) => {
  if (errorMsg) throw new Error(errorMsg);
});
const event = { process: 1 };
const context = {};

describe('[example]', () => {
  test('error calling process api', async () => {
    let error = 'error calling process';
    got.post.mockRejectedValueOnce(error);
    await expect(example.example(event, context, callback)).rejects.toThrow(error);
    expect(callback).toHaveBeenCalledWith(error);
  });

  test('should success', async () => {
    got.post.mockResolvedValueOnce({
      body: { active: true },
    });
    await example.example(event, context, callback);
    expect(callback).toHaveBeenCalledWith(null, 'Process 1 is: true');
  });
});
