import React from 'react';
import './Sidebar.css'
import {assets} from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="top">
            <img className='menu' src={assets.menu_icon} />
            <div className="chat">
              <img src={assets.plus_icon}  />
              <p>New Chat</p>
            </div>

            <div className="recent">
              <p>Recent</p>
              <div className="recent-history">
                <img src={assets.message_icon}  />
                <p>Learn about React...</p>
              </div>
            </div>

        </div>
        <div className="bottom">

        </div>
    </div>
  );
};

export default Sidebar;