// import { Select } from 'antd';
import Select from 'rc-select';
import React from 'react';
import { useState } from 'react';

const OPTIONS = {
  KEY1: '1',
  KEY2: '2',
  KEY3: '3',
};

export const MyComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleChange = (value, option) => {
    console.debug('123');
    setIsEnabled(option.key === OPTIONS.KEY1); // test never enters this line
  };

  return (
    <Select onChange={handleChange}>
      <Select.Option key={OPTIONS.KEY1} value="my option 1">
        my option 1
      </Select.Option>
      <Select.Option key={OPTIONS.KEY2} value="my option 2">
        my option 2
      </Select.Option>
      <Select.Option key={OPTIONS.KEY3} value="my option 3">
        my option 3
      </Select.Option>
    </Select>
  );
};
