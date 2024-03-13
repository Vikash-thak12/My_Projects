import React, { useState } from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets';

const Sidebar = () => {

  const [extended, setExtended] = useState(false);

  return (
    <div className="Sidebar">
      <div className="top">


        <img onClick={() => setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} />
        <div className="chat">
          <img src={assets.plus_icon} />
          {extended?<p>New Chat</p>:null}
        </div>


        {extended? 
        <div className="recent">
          <p>Recent</p>
          <div className="recent-history">
            <img src={assets.message_icon} />
            <p>Learn about React...</p>
          </div>
        </div> 
        :null}
       

      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} />
          {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;