import * as services from './service';
import db from './db';

describe('67099512', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should get animal list', async () => {
    const dbMock = jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: ['dog', 'cat'] });
    const response = await services.GetAnimalsList();
    expect(response).toEqual({
      code: 200,
      status: 'ok',
      error: '',
      message: 'Animals Returned',
      count: 2,
      data: ['dog', 'cat'],
    });
    expect(dbMock).toBeCalled();
    expect(dbMock).toHaveBeenCalledWith(
      'select animalid, description from animal where active=1 order by sortorder, description'
    );
  });

  it('should handle error', async () => {
    const error = new Error('Internal server error');
    const dbMock = jest.spyOn(db, 'query').mockRejectedValueOnce(error);
    const response = await services.GetAnimalsList();
    expect(response).toEqual({
      code: 400,
      status: 'error',
      error,
      message: 'Error retrieving Animals List',
      count: 0,
      data: [],
    });
    expect(dbMock).toBeCalled();
    expect(dbMock).toHaveBeenCalledWith(
      'select animalid, description from animal where active=1 order by sortorder, description'
    );
  });
});
