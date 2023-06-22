import { mock } from 'jest-mock-extended';

interface SomeClient {
	someFunction(): number;
	someOtherFunction(): number;
}

test('throwing an error if we forget to specify the return value', () => {
	const mockClient = mock<SomeClient>(
		{},
		{
			fallbackMockImplementation: () => {
				throw new Error('not mocked');
			},
		},
	);
	expect(() => mockClient.someFunction()).toThrowError('not mocked');
	expect(() => mockClient.someOtherFunction()).toThrowError('not mocked');
});
