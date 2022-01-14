const { main } = require('./main');
const csv = require('csvtojson');

jest.mock('csvtojson');

describe('65620607', () => {
  it('should pass', async () => {
    const commTemplateCsvJsonArray = [1, 2, 3];
    const fromFile = jest.fn().mockResolvedValue(commTemplateCsvJsonArray);
    csv.mockImplementation(() => ({ fromFile }));
    const actual = await main();
    expect(actual).toEqual([1, 2, 3]);
    expect(csv).toBeCalledTimes(1);
    expect(fromFile).toBeCalledWith('./test.csv');
  });
});
