import { initRepo, getOrganisationsRepo } from './Repositories';

export const getOrganisations = async (event) => {
  try {
    await initRepo();
    const repo = await getOrganisationsRepo();
    const data = await repo.getOrganisations();

    // 200: Response is an array & is not empty
    if (Array.isArray(data) && data.length) return { statusCode: 200, body: JSON.stringify(data) };

    // 404: Response is an array and is empty
    if (Array.isArray(data) && !data.length) return { statusCode: 404 };

    return { statusCode: 400 };
  } catch (error) {
    const errorMessage = error?.message || 'error fetching organisations';

    return { statusCode: 400, body: errorMessage };
  }
};
