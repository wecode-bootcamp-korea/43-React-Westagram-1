import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './LoginMinkyung.scss';

const LoginMinkyung = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };
  /*1-1번 */
  const [id, setId] = useState('');
  const saveUserId = e => {
    setId(e.target.value);
  };

  const [pw, setPw] = useState('');
  const saveUserPw = e => {
    setPw(e.target.value);
  };
  /*1-2번 */
  // const [isActive, setIsActive] = useState('account');
  // const check = () => {
  //   id.includes('@') && pw.length > 4
  //     ? setIsActive('active')
  //     : setIsActive('account');
  // };
  const [isActive, setIsActive] = useState(false);
  const check = () => {
    id.includes('@') && pw.length > 4 ? setIsActive(true) : setIsActive(false);
  };
  //const check = () => {
  // setId.includes('@') && pw.length > 4 ? setIsActive('active') : setIsActive('account') }

  return (
    <div className="loginminkyung">
      <form>
        <header className="logo">Westagram</header>
        <div className="container">
          <input
            value={id}
            onChange={saveUserId}
            className="id"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            value={pw}
            onChange={saveUserPw}
            className="password"
            placeholder="비밀번호"
            type="password"
          />
          {/* <button onClick={goToMain} className={isActive}>
          로그인
        </button> */}
          <button
            className={`account ${isActive ? 'active' : ''}`}
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
      </form>
      <p className="bottom">비밀번호를 잊으셨나요?</p>
    </div>
  );
};
export default LoginMinkyung;
