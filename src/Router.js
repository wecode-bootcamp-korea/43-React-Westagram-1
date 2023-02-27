import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginJinpyeong from './pages/kimjinpyeong/Login/LoginJinpyeong';
import MainJinpyeong from './pages/kimjinpyeong/Main/MainJinpyeong';
import LoginEunbin from './pages/muneunbin/Login/LoginEunbin';
import MainEunbin from './pages/muneunbin/Main/MainEunbin';
import LoginMinkyung from './pages/kimminkyung/Login/LoginMinkyung';
import MainMinkyung from './pages/kimminkyung/Main/MainMinkyung';
import Intro from 'components/Intro/Intro';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login-eunbin" element={<LoginEunbin />} />
        <Route path="/main-eunbin" element={<MainEunbin />} />
        <Route path="/login-minkyung" element={<LoginMinkyung />} />
        <Route path="/main-minkyung" element={<MainMinkyung />} />
        <Route path="/login-jinpyeong" element={<LoginJinpyeong />} />
        <Route path="/main-jinpyeong" element={<MainJinpyeong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
