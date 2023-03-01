import React from 'react';
import './MainJinpyeong.scss';
import Nav from 'components/Nav/Nav';
import Feeds from './mainComponents/Feeds/FeedsJinpyeong';
import SidebarContainer from './mainComponents/Sidebar/SidebarContainer/SidebarContainerJinpyeong';

const MainJinpyeong = () => {
  const storyArr = [];
  const recommendArr = [];
  for (let i = 0; i < 10; i++) {
    let randomStr = Math.random().toString(36).substring(2, 12);
    i < 5 ? storyArr.push(randomStr) : recommendArr.push(randomStr);
  }
  return (
    <div className="mainJinpyeong">
      <Nav userList={[...storyArr, ...recommendArr]} />
      <div className="feeds">
        <Feeds />
        <Feeds />
        <Feeds />
      </div>
      <div className="sidebar">
        <SidebarContainer storyArr={storyArr} recommendArr={recommendArr} />
      </div>
    </div>
  );
};

export default MainJinpyeong;
