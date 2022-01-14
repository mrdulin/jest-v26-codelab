import React from 'react';

export const TopicItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref}>
      <p>{props.topic.name}</p>
      <i className="fal fa-plus" />
    </li>
  );
});
