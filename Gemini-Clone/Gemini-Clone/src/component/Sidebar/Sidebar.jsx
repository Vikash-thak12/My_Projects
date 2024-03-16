import React, { useContext, useState } from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompts,newChat } = useContext(Context);

  const loadPromt = async (prompt) => {
    setRecentPrompts(prompt)
    await onSent(prompt)
  }

  return (
    <div className="Sidebar">
      <div className="top">


        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} />
        <div onClick={()=>newChat()} className="chat">
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>


        {extended ?
          <div className="recent">
            <p className='Recent-txt'>Recent</p>

            {/* This below code is used to store all the prompts in the prevPrompts Array */}
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPromt(item)} className="recent-history">
                  <img src={assets.message_icon} />
                  <p>{item.slice(0, 20)}...</p>
                </div>
              )
            })}


          </div>
          : null}


      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;