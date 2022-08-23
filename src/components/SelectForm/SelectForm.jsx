import React from 'react';
import { handleIncludeHTML, handleParasCount } from '../../actions/actions';

function SelectForm() {
  return (
    <div className="container my-3">
      <label htmlFor="parasCountInput">
        Paragraphs
        <input
          type="number"
          defaultValue="4"
          min="1"
          id="parasCountInput"
          onChange={handleParasCount}
          className="form-control"
        />
      </label>
      <label htmlFor="htmlChooser" className="mx-5">
        Include HTML
        <select className="w-100 form-select" onChange={handleIncludeHTML}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </label>
    </div>
  );
}

export default SelectForm;
