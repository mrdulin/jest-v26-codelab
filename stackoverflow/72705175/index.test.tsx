import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { AddOperationTrigger } from '.';

interface TriggerProps {
  handleOpen?: () => void;
}
describe('AddOperationTrigger', () => {
  const Trigger = ({ handleOpen }: TriggerProps) => <button onClick={handleOpen} />;

  beforeEach(() => {
    render(<AddOperationTrigger TriggerController={<Trigger />} />);
  });

  it('should open the dialog onClick on trigger component', () => {
    expect(screen.queryByText('Dialog title', { selector: 'h2' })).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { hidden: true }));
    expect(screen.getByText('Dialog title', { selector: 'h2' })).toBeInTheDocument();
  });
});
