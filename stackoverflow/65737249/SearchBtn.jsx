import React from 'react';

export function searchBtn(triggerSearch) {
  return (
    <div className="d-flex justify-content-center my-3">
      <input
        type="submit"
        className="btn btn-primary w-25"
        value="Search"
        onClick={(e) => {
          e.preventDefault();
          triggerSearch();
        }}
      ></input>
    </div>
  );
}
