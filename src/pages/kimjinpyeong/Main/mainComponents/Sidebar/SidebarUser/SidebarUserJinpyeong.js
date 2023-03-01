import React from 'react';
import './SidebarUserJinpyeong.scss';
import userImg from '../../../../../../assets/kimjinpyeong/emptyUser.png';

const SidebarUserJinpyeong = props => {
  const { userName } = props;

  return (
    <div className="sidebarUserJinpyeong">
      <img src={userImg} alt="userImg" />
      <span className="userName">{userName}</span>
    </div>
  );
};

export default SidebarUserJinpyeong;
