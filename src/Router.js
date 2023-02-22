import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginJinpyeong from './pages/kimjinpyeong/Login/Login';
import MainJinpyeong from './pages/kimjinpyeong/Main/Main';
import LoginEunbin from './pages/muneunbin/Login/Login';
import MainEunbin from './pages/muneunbin/Main/Main';
import LoginMinkyung from './pages/kimminkyung/Login/Login';
import MainMinkyung from './pages/kimminkyung/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
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
