import React from 'react';
import Sidebar from '../SidebarJinpyeong';
import './SidebarContainerJinpyeong.scss';

const SidebarContainerJinpyeong = props => {
  const { storyArr, recommendArr } = props;
  return (
    <div className="sidebarContainerJinpyeong">
      <div className="story">
        <Sidebar type="story" data={storyArr} />
      </div>
      <div className="recommend">
        <Sidebar type="recommend" data={recommendArr} />
      </div>
      <div className="bottom">
        {SIDEBAR_BOTTOM.map((item, key) => (
          <span key={key}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default SidebarContainerJinpyeong;

const SIDEBAR_BOTTOM = [
  '소개·',
  '도움말·',
  '홍보 센터·',
  'API·',
  '채용 정보·',
  '개인정보처리방침·',
  '약관·',
  '위치·',
  '언어·',
  'Meta Verified',
];
