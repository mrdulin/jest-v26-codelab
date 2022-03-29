import React from 'react';

export const MyEl = ({ someCondition = false, customClassName = '' }) => (
  <div className={!!someCondition ? `my-custom-class-${customClassName}` : ''}>some content</div>
);
