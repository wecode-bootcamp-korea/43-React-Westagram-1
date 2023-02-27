import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginEunbin.scss';

const LoginEunbin = () => {
  const [idData, setIdData] = useState('');
  const [pswData, setPswData] = useState('');
  const isWorkingBtn = idData.indexOf('@') !== -1 && pswData.length > 5;
  // let [active, setActive] = useState(false);

  const idDataHandler = e => {
    setIdData(e.target.value);
  };

  const pswDataHandler = e => {
    setPswData(e.target.value);
  };

  const navigate = useNavigate();
  function goToMainPage() {
    if (isWorkingBtn) navigate('/main-eunbin');
  }

  return (
    <div className="login">
      <div id="bgBoder">
        <h1 id="westargramLogo">westargram</h1>
        <div className="inputButtonContents">
          <input
            vlaue={idData}
            onChange={idDataHandler}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="id"
          />
          <input
            vlaue={pswData}
            onChange={pswDataHandler}
            type="password"
            placeholder="비밀번호"
            className="password"
          />
          <button
            className={isWorkingBtn ? 'activeLoginBtn' : 'loginBtn'}
            onClick={goToMainPage}
          >
            로그인
          </button>

          <a href="https://www.instagram.com/accounts/password/reset/">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginEunbin;
