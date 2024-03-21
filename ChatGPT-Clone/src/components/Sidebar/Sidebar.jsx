import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">

        {/* upper part of the sidebar */}
        <div className="upper">
            <div className="left">
                <img src={assets.chatgpt} alt="" />
                <p>New Chat</p>
            </div>
            <img src={assets.chat} alt="" />
        </div>

        {/* middle part of the sidebar */}
        <div className="middle">
            <div className="mid-1">
                <img src={assets.add}  />
                <p>New Chat</p>
            </div>
            <div className="mid-2">
                <img src={assets.message}  />
                <p>What is programming?</p>
            </div>
            <div className="mid-2">
                <img src={assets.message}  />
                <p>How to use API?</p>
            </div>
        </div>

        {/* Bottom part of the sidebar */}
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