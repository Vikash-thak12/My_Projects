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
      </div>
    </>
  );
};

export default Sidebar;