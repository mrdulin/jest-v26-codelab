export const taskManagerRemoteService = {
  getTasks: (): Promise<any> => {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_TASKS_URI}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
