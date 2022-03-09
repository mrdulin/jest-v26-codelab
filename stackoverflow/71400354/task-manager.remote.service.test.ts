import '@testing-library/react';
import { taskManagerRemoteService } from './task-manager.remote.service';

describe('TaskManagerRemoteService', () => {
  let oFetch: typeof global.fetch;
  beforeAll(() => {
    oFetch = global.fetch;
  });
  afterAll(() => {
    global.fetch = oFetch;
  });
  it('should get tasks when getTasks method is called', async () => {
    global.fetch = jest.fn().mockResolvedValue([{}]);
    const tasks = await taskManagerRemoteService.getTasks();

    expect(global.fetch).toHaveBeenCalled();
    expect(tasks).toStrictEqual([{}]);
  });
});
