import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { SearchButton } from './SearchButton';
import * as utils from './utils';

describe('SearchButtonTest', () => {
  it('should call search function on submit', async () => {
    const searchFunctionMock = jest.fn();
    const isUserLoggedInSpy = jest.spyOn(utils, 'isUserLoggedIn').mockResolvedValue(true);

    const { getByTestId } = render(<SearchButton searchFunction={searchFunctionMock} />);

    fireEvent.click(getByTestId('search-button-submit'));

    expect(isUserLoggedInSpy).toHaveBeenCalled();
    await waitFor(() => expect(searchFunctionMock).toHaveBeenCalled());
  });
});
