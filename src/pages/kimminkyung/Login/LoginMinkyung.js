import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginMinkyung.scss';

const LoginMinkyung = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  const [id, setId] = useState('');
  const saveUserId = e => {
    setId(e.target.value);
  };

  const [pw, setPw] = useState('');
  const saveUserPw = e => {
    setPw(e.target.vlaue);
  };

  return (
    <div className="loginminkyung">
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
        />
        <button disal onClick={goToMain} className="account">
          로그인
        </button>
      </div>
      <p className="bottom">비밀번호를 잊으셨나요?</p>
    </div>
  );
};
export default LoginMinkyung;
