import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const MenuItemGroup = ({ warnKey, ...rest }) => <div {...rest}>Admin Portal</div>;

export default function AdminPanel() {
  return (
    <div>
      <MenuItemGroup warnKey={1} className="menu-item-group" />
    </div>
  );
}

test('full app rendering/navigating', async () => {
  render(<AdminPanel />);
  expect(screen.findByText(/Admin Portal/i)).toBeInTheDocument();
});
