import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main-container'>
      <div className="header">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="middle">
        <div className="text">
          <h2><span>Hello, Vikash</span></h2>
          <h2>How can I help you Today?</h2>
        </div>
        <div className="cards">
          <div className="card">
            <p>A debate: how should you store bread?</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Find your Youtube videos with inspiring best man speeches</p>
            <img src={assets.youtube_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm a tagline for my online store</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>Ideas to inspire a friend on their birthday</p>
            <img src={assets.compass_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;