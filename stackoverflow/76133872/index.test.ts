import { anything, instance, mock, when } from 'ts-mockito';

class B {
	public doTheThing(str: string): number {
		return str.length;
	}
}

class A {
	private readonly b: B;
	constructor(b: B) {
		this.b = b;
	}

	public doTheMainThing() {
		return this.b.doTheThing('strrr');
	}
}

describe('test cases', () => {
	it('controls the mocked method', () => {
		const mockedB: B = mock(B);
		const instanceB: B = instance(mockedB);
		when(mockedB.doTheThing(anything())).thenReturn(4);

		const a = new A(instanceB);
		const actual = a.doTheMainThing();
		expect(actual).toBe(4);
	});
});
