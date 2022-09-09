import IndividualContact from './';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Given a IndividualContact component', () => {
  describe('When it is instantiated with a contact and in a viewport bigger than 800px', () => {
    const contact = {
      name: 'Dan',
      surname: 'Abramov',
      email: 'dan@test.com',
      phoneNumber: '888555222',
      owner: 'owner',
    };

    test("Then it should render the 'email' and the 'phoneNumber' of the contact", async () => {
      render(<IndividualContact contact={contact} />);

      global.innerWidth = 1000;
      act(() => {
        global.dispatchEvent(new Event('resize'));
      });

      await waitFor(() => {
        expect(screen.queryByText('dan@test.com')).toBeInTheDocument();
      });
    });
  });
});
