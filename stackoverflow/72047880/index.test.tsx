import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { ApiStore, IngredientExpanded } from '.';

describe('72047880', () => {
  test('should find the selected item', () => {
    render(
      <ApiStore value={'product name'}>
        <IngredientExpanded />
      </ApiStore>
    );
    const productName = screen.getByText('product name');
    expect(productName).toBeInTheDocument();
  });

  test('should not find the selected item', () => {
    render(
      <ApiStore value={null}>
        <IngredientExpanded />
      </ApiStore>
    );
    const productName = screen.queryByText('product name');
    expect(productName).not.toBeInTheDocument();
  });
});
