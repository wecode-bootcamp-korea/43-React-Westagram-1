import React, { useState } from 'react';
import emptyHeart from '../../../../../../assets/kimjinpyeong/emptyHeart.png';
import fillHeart from '../../../../../../assets/kimjinpyeong/fillHeart.png';
import deleteIcon from '../../../../../../assets/kimjinpyeong/delete.png';
import './ReplyJinpyeong.scss';

const ReplyJinpyeong = props => {
  const [isClickedGood, setIsClickedGood] = useState(false);

  const { nickname, reply, replyArr, setReplyArr } = props;

  const handleHeart = () => {
    setIsClickedGood(!isClickedGood);
  };

  const handleDelete = (nickname, reply) => {
    setReplyArr(
      replyArr.filter(
        replyOne =>
          !(
            nickname === Object.keys(replyOne)[0] &&
            reply === Object.values(replyOne)[0]
          )
      )
    );
  };
  return (
    <p className="replyJinpyeong">
      <span className="txtReplyId">
        <b>{nickname}</b>&nbsp;
      </span>
      {reply}
      <span className="btnGoodAndDelete">
        <img
          src={isClickedGood ? fillHeart : emptyHeart}
          alt="good"
          onClick={handleHeart}
        />

        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => handleDelete(nickname, reply)}
        />
      </span>
    </p>
  );
};

export default ReplyJinpyeong;
