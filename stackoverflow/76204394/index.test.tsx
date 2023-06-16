import { shallow } from 'enzyme';
import React from 'react';
import { SomeComponent, SomeParentComponent } from '.';

describe('76204394', () => {
	test('should pass', () => {
		const wrapper = shallow(<SomeParentComponent />);
		const actual = wrapper.find(SomeComponent).invoke('someEvent')();
		expect(actual).toBeTrue();
	});
});
