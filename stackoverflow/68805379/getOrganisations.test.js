import { getOrganisations } from './getOrganisations';
import { getOrganisationsRepo } from './Repositories';

jest.mock('./Repositories');

describe('68805379', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should return array data', async () => {
    const repo = {
      getOrganisations: jest.fn().mockResolvedValueOnce([{ id: 1 }]),
    };
    getOrganisationsRepo.mockResolvedValueOnce(repo);
    const actual = await getOrganisations();
    expect(actual).toEqual({ statusCode: 200, body: JSON.stringify([{ id: 1 }]) });
    expect(getOrganisationsRepo).toBeCalledTimes(1);
    expect(repo.getOrganisations).toBeCalledTimes(1);
  });
});
