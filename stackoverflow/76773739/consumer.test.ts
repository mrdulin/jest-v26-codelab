import { instance, mock, when } from 'ts-mockito';
import { Broker } from './broker';
import { Consumer } from './consumer';
import { ValueService } from './value-service';

describe('Consumer', () => {
	it('uses the value', async () => {
		const mockedValueService = mock(ValueService);
		const valueService = instance(mockedValueService);

		const mockedBroker = mock(Broker);
		const broker = instance(mockedBroker);

		when(mockedValueService.fetchValue()).thenResolve('abc');
		when(mockedBroker.svc).thenReturn(valueService);

		const consumer = new Consumer(broker);
		expect(await consumer.useValue()).toBe('abc123');
	});
});
