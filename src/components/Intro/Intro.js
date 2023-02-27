import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <div className="title">Westagram</div>
      <div className="btn">
        <ul>
          <li>
            <Link className="link" to="/login-eunbin">
              <button className="eb">Eunbin Moon</button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/login-minkyung">
              <button className="mk">Minkyung Kim</button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/login-jinpyeong">
              <button className="jp">Jinpyeong Kim</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
