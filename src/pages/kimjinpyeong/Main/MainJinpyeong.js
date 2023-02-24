import React from 'react';
import './MainJinpyeong.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from './mainComponents/Feeds/FeedsJinpyeong';

const MainJinpyeong = () => {
  return (
    <div className="main">
      <Nav />
      <Feeds />
      <Feeds />
      <Feeds />
    </div>
  );
};

export default MainJinpyeong;
