import React from 'react';

export const MyComponent = () => {
  return (
    <label>Nationaliteit
      <select id="nationalityCode" name="nationalityCode" >
        <option>Choose</option>
        <optgroup label="Most used">
          <option value="0052">Belgium</option>
          <option value="0055">German Citizien</option>
          <option value="0057">French</option>
          <option value="0001">Dutch</option>
        </optgroup>
        <optgroup label="Alle Nationalities">
          <option value="0052">Belgium</option>
          <option value="0055">German Citizien</option>
          <option value="0057">French</option>
          <option value="0001">Dutch</option>
          <option value="0050">Albanese</option>
          <option value="0223">American Citizen</option>
        </optgroup>
      </select>
    </label>
  )
}