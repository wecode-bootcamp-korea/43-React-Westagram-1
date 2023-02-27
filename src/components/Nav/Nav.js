import React from 'react';
import './Nav.scss';
import instaImg from 'assets/common/instagram.png';
import compassImg from 'assets/common/compass.png';
import emptyHeartImg from 'assets/common/emptyHeart.png';
import profileImg from 'assets/common/account.png';

const Nav = () => {
  return (
    <div className="nav">
      <div className="home">
        <img className="imgHome" src={instaImg} alt="instagramLogo" />
        <span className="txtHome">Westagram</span>
      </div>
      <div className="search">
        <input className="txtSearch" type="text" placeholder="검색" />
      </div>
      <div className="navList">
        <ul>
          <li>
            <img src={compassImg} alt="compassIcon" />
          </li>
          <li>
            <img src={emptyHeartImg} alt="compassIcon" />
          </li>
          <li>
            <img src={profileImg} alt="compassIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
