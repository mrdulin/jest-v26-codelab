import { Pool, PoolConnection } from 'mysql2/promise';
import { instance, mock, verify, when } from 'ts-mockito';
import Service from './';

const resolvableInstance = <T extends {}>(mock: T) =>
	new Proxy<T>(instance(mock), {
		get(target, name: PropertyKey) {
			if (['Symbol(Symbol.toPrimitive)', 'then', 'catch'].includes(name.toString())) {
				return undefined;
			}

			return (target as any)[name];
		},
	});

describe('Conn test', function () {
	it('Should save info', async function () {
		const connPool = mock<Pool>();
		const connection = mock<PoolConnection>();

		const connectionInstance = resolvableInstance(connection);
		when(connPool.getConnection()).thenResolve(connectionInstance);

		const connPoolInstance = instance(connPool);
		const service = new Service(connPoolInstance);

		const conn = await service.saveInfo();
		expect(conn).toBe(connectionInstance);
		verify(connPool.getConnection()).called();
	});
});
