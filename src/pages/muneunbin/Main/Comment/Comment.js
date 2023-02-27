import React, { useState } from 'react';

const CommentEunbin = () => {
  const [commentData, setCommentData] = useState('');

  const commentDataClick = e => {
    setCommentData(e.target.vlaue);
  };

  return (
    <div id="commentpart">
      <input
        value={commentData}
        onchange={commentDataClick}
        className="comment"
        type="text"
        placeholder="댓글 달기..."
      />
      <button className="commentbutton">
        <strong>게시</strong>
      </button>
    </div>
  );
};

export default CommentEunbin;
