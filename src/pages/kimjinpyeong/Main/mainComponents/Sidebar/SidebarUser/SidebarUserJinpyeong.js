import React from 'react';
import userImg from '../../../../../../assets/kimjinpyeong/emptyUser.png';
import './SidebarUserJinpyeong.scss';

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
