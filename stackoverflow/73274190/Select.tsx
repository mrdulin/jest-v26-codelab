import React from 'react';
import { Select as MySelect } from 'antd';

const { Option } = MySelect;

export interface SelectOption {
  id: string;
  label: string;
}

interface SelectProp {
  options: SelectOption[];
  selectedOption: string;
  onChange: (key: string) => void;
}

function Select({ options, selectedOption, onChange }: SelectProp) {
  return (
    <MySelect data-testid='asca' value={selectedOption} onChange={onChange}>
      {options.map((opt) => (
        <Option key={opt.id} value={opt.id}>
          {opt.label}
        </Option>
      ))}
    </MySelect>
  );
}

export default Select;
