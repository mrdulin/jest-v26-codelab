export const types = {
  TEST_API: 'TEST_API',
};
export function loadData(request) {
  return {
    type: types.TEST_API,
    coreApi: {
      body: request,
      success: (response) => [receiveData(response), update(response)],
    },
  };
}

export function receiveData(request) {}
export function update(request) {}
