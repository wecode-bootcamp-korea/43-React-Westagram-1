import React from 'react';
import './CommentList.scss';

const CommentList = props => {
  console.log(props);
  return (
    <li>
      <storng className="margin">{props.id}</storng>
      <span>{props.comment}</span>
    </li>
  );
};

export default CommentList;
