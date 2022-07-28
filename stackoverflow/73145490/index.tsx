import React from 'react';

export const Mycomponent = () => {
  return (
    <div>
      <label className="form-control__radio radio__label__pos__right " id="anyAmount" data-testid="my-radio-">
        <span className="input__container">
          <input type="radio" id="" name="test" className="" value="Anyamount" />
        </span>
        <span className="label__container">
          <span id="anyAmount--text" className="label__text" tabIndex={-1}>
            Any amount
          </span>
        </span>
      </label>
      <label className="form-control__radio radio__label__pos__right " id="customAmounts" data-testid="my-radio-">
        <span className="input__container">
          <input type="radio" id="" name="test" className="" value="Customamount" />
        </span>
        <span className="label__container">
          <span id="customAmounts--text" className="label__text" tabIndex={-1}>
            Custom amount
          </span>
        </span>
      </label>
    </div>
  );
};
