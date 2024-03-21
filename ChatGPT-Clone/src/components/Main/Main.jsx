import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';


const Main = () => {
    return (
        <>
            <div className="main">
                <div className="content">
                    {/* chat responding part */}
                    <div className="chat">
                        <div className="firstchat">
                            <img src={assets.user_icon} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repudiandae.
                            </p>
                        </div>
                        <div className="secondchat bot">
                            <img src={assets.chatgptLogo} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repudiandae, cumque rerum maxime optio quisquam debitis, quis ea impedit pariatur consequuntur tempora. Quisquam mollitia deserunt, illum voluptate a voluptatum magnam.
                                
                            </p>
                        </div>
                    </div>

                    {/* prompts sending part */}
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