import React from 'react';
import './SidebarUserJinpyeong.scss';
import userImg from '../../../../../../assets/kimjinpyeong/emptyUser.png';

const SidebarUser = props => {
  const { userName } = props;

  return (
    <div className="sidebarUser">
      <img src={userImg} alt="userImg" />
      <span className="userName">{userName}</span>
    </div>
  );
};

export default SidebarUser;
