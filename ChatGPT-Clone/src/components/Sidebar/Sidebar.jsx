import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <>
      <div className="main">
        <div className="upper">
            <div className="left">
                <img src={assets.chatgpt} alt="" />
                <p>New Chat</p>
            </div>
            <img src={assets.chat} alt="" />
        </div>

        <div className="bottom">
            <div className="first">
                <img src={assets.home} />
                <p>Home</p>
            </div>
            <div className="first">
                <img src={assets.bookmark} />
                <p>Saved</p>
            </div>
            <div className="first">
                <img src={assets.rocket} />
                <p>Upgrade to Pro</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;