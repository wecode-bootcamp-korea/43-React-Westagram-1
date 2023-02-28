import React, { useEffect, useState } from 'react';
import './Nav.scss';
import instaImg from 'assets/common/instagram.png';
import compassImg from 'assets/common/compass.png';
import emptyHeartImg from 'assets/common/emptyHeart.png';
import profileImg from 'assets/common/account.png';

const Nav = props => {
  const { userList } = props;
  const [inputText, setInputText] = useState('');
  const [selectedUser, setSelectedUser] = useState([]);
  const [viewSearchArea, setViewSearchArea] = useState(false);

  useEffect(() => {
    if (inputText) {
      setSelectedUser(userList.filter(u => u.includes(inputText)));
      setViewSearchArea(true);
    } else {
      setSelectedUser([]);
      setViewSearchArea(false);
    }
  }, [inputText, userList]);
  const handleChange = e => {
    setInputText(e.target.value);
  };

  return (
    <div className="nav">
      <div className="home">
        <img src={instaImg} className="imgHome" alt="instagramLogo" />
        <span className="txtHome">Westagram !!</span>
      </div>
      <div className="search">
        <input
          className="txtSearch"
          type="text"
          placeholder="검색"
          onChange={handleChange}
          onBlur={() => setViewSearchArea(false)}
          value={inputText}
        />
        {viewSearchArea && (
          <div className="searchArea">
            {selectedUser.map((u, idx) => (
              <div key={idx} className="searchUserOne">
                <button className="searchUserIcon" />
                {u}
              </div>
            ))}
          </div>
        )}
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
