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
            <button className="eb">
              <Link className="link" to="/login-eunbin">
                Eunbin Moon
              </Link>
            </button>
          </li>
          <li>
            <button className="mk">
              <Link className="link" to="/login-minkyung">
                Minkyung Kim
              </Link>
            </button>
          </li>
          <li>
            <button className="jp">
              <Link className="link" to="/login-jipyeong">
                Jinpyeong Kim
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
