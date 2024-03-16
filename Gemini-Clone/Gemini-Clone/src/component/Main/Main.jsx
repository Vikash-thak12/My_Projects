import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

  const { onSent, recentPrompts, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className='main-container'>
      <div className="header">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="middle">
        {!showResult
          ?
          <>
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
          </> :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>

            <div className="result-data">
              {loading?<img className='Rotate' src={assets.gemini_icon} alt="" />:<img src={assets.gemini_icon} alt="" />}
              {loading?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }

        <footer>
          <div className="main-bottom">
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') { onSent() } }} value={input} type="text" placeholder="Enter the Prompts..." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}

            </div>
          </div>
        </footer>

        <p className='copyRight'>Gemini may display inaccurate info, including about people, so double-check its responses.</p>

      </div>


    </div>
  );
};

export default Main;