import Knex from 'knex';

jest.mock('knex');

describe('68717941', () => {
  test('should pass', () => {
    const querybuilder = {
      where: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      toSQL: jest.fn().mockReturnThis(),
      toNative: jest.fn(),
    };
    const mKnex = jest.fn().mockReturnValue(querybuilder);
    Knex.mockReturnValue(mKnex);
    const { main } = require('./');
    main();
    expect(Knex).toBeCalledWith({ client: 'mysql' });
    expect(mKnex).toBeCalledWith('table_name');
    expect(querybuilder.where).toBeCalledWith({ title: 'xxx-yyy', lang: 'eng' });
    expect(querybuilder.select).toBeCalledTimes(1);
    expect(querybuilder.orderBy).toBeCalledWith('date', 'desc');
    expect(querybuilder.toSQL).toBeCalledTimes(1);
    expect(querybuilder.toNative).toBeCalledTimes(1);
  });
});
