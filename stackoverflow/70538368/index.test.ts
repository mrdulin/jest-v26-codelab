// some real function imported from some module
function getUserById(dbc, id) {
  return dbc.query('select * from users where id = $1;', [id]);
}

describe('70538368', () => {
  test('should pass', () => {
    const mDbc = {
      query: jest.fn().mockReturnValue({ name: 'teresa teng' }),
    };
    const actual = getUserById(mDbc, '1');
    expect(actual).toEqual({ name: 'teresa teng' });
    expect(mDbc.query).toBeCalledWith('select * from users where id = $1;', ['1']);
  });
});
