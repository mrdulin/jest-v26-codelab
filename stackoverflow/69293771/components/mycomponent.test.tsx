import React from 'react';
import { act, create } from 'react-test-renderer';
import { MyComponent } from './mycomponent';
import myservice from '../services/myservice';
import { ServiceResponse } from '../services/serviceResponse';

const mockData: ServiceResponse[] = [
  { label: 'a', id: 'b' },
  { label: 'f', id: 'g' },
];

describe('mycomponent', () => {
  it('MyComponent returns data', async () => {
    jest.spyOn(myservice, 'GetServiceData').mockResolvedValue(mockData);
    let root;
    await act(async () => {
      root = create(<MyComponent />);
    });
    console.log(root.toJSON());
  });
});
