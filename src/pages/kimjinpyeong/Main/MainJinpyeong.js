import React, { useEffect, useState } from 'react';
import Feeds from './mainComponents/Feeds/FeedsJinpyeong';
import SidebarContainer from './mainComponents/Sidebar/SidebarContainer/SidebarContainerJinpyeong';
import Nav from 'components/Nav/Nav';
import './MainJinpyeong.scss';

const MainJinpyeong = () => {
  const [feedData, setFeedData] = useState([]);
  const storyArr = [];
  const recommendArr = [];
  for (let i = 0; i < 10; i++) {
    let randomStr = Math.random().toString(36).substring(2, 12);
    i < 5 ? storyArr.push(randomStr) : recommendArr.push(randomStr);
  }

  useEffect(() => {
    fetch('/data/feedDataJinpyeong.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => setFeedData(data));
  }, []);

  return (
    <div className="mainJinpyeong">
      <Nav userList={[...storyArr, ...recommendArr]} />
      <div className="feeds">
        {feedData && feedData.map(feed => <Feeds key={feed.id} data={feed} />)}
      </div>
      <div className="sidebar">
        <SidebarContainer storyArr={storyArr} recommendArr={recommendArr} />
      </div>
    </div>
  );
};

export default MainJinpyeong;
