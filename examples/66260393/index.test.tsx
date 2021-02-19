import React from 'react';
import { withData } from './';
import { getData } from './services/DataService';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

jest.mock('./services/DataService');

const mockedGetData = mocked(getData);

class MockedComponent extends React.Component {
  render() {
    return <div>mocked component</div>;
  }
}

function flushPromises() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe('66260393', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should render wrapped component', async () => {
    mockedGetData.mockResolvedValueOnce('fake data');
    const WithDataComponent = withData(MockedComponent, 1);
    const wrapper = shallow(<WithDataComponent></WithDataComponent>);
    expect(wrapper.state('data')).toEqual([]);
    await flushPromises();
    expect(wrapper.state('data')).toEqual('fake data');
    expect(wrapper.find(MockedComponent)).toBeTruthy();
    expect(wrapper.find(MockedComponent).prop('data')).toEqual('fake data');
  });
});
