enum STATUS {
  DEAD,
  ALIVE,
}

export interface Human {
  name: string;
  status: STATUS.ALIVE | STATUS.DEAD;
}

describe('Human', () => {
  const mock = jest.fn<Human, []>(() => {
    return {
      name: 'Test',
      status: STATUS.ALIVE,
    };
  });

  it('should return properties', () => {
    const human = mock();
    expect(human.name).toEqual('Test');
    expect(human.status).toEqual(STATUS.ALIVE);
  });
});
