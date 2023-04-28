import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import NoteForm from './note-form';

describe('NoteForm', () => {
  test('<NoteForm /> calls onSubmit', async () => {
    const handleSubmit = jest.fn().mockImplementation((e) => {
      e.persist();
    });
    const { container } = render(<NoteForm handleNoteOnSubmit={handleSubmit} />);

    const noteInput = container.querySelector('input[name="note"]');
    fireEvent.change(noteInput, {
      target: { name: 'note', value: 'testing a form...' },
    });

    fireEvent.submit(container.querySelector('form'));
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          elements: expect.objectContaining({ note: expect.objectContaining({ value: 'testing a form...' }) }),
        }),
      })
    );
  });
});
