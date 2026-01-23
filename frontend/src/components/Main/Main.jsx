import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets.js'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemni</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello , Dev.</span></p>
                    <p>How can i help you today ?</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <p>Suggested beautiful places  to see an upcoming roadtrip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Briefly summarise : privatisation </p>
                        <img src={assets.message_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Should i invest in the KPC IPO ?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Ask Anything...' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">Gemni can make mistakes. Check important info.</p>
                </div>
            </div>
        </div>
    )
}

export default Main