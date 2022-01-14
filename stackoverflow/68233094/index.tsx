import React from 'react';
import { useDispatch } from 'react-redux';
import { postJobAction } from './redux/postJobActions';

const PostJobComponent = () => {
  const dispatch = useDispatch();

  const postJob = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const location = event.target.location.value;

    dispatch(postJobAction({ title, location }));
  };

  return (
    <div className="post-job">
      <form onSubmit={postJob}></form>
    </div>
  );
};

export default PostJobComponent;
