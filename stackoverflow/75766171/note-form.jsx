import React from "react";

const NoteForm = ({ handleNoteOnSubmit }) => (
  <form onSubmit={handleNoteOnSubmit}>
    <input name="note" id="note" />
    <button type="submit">save</button>
  </form>
);

export default NoteForm;