import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';


const Main = () => {
  return (
    <>
      <div className="main">
        <div className="content">
            <div className="sender">
                <input type="text" placeholder='Send a message' />
                <img src={assets.send} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Main;