import React from 'react'
import { HiHeart, HiChat, HiArrowUp,HiArrowDown } from "react-icons/hi"
import pics2 from "../../static/images/anime.jpg";
import vid from "../../static/images/vid.mp4"
const Clips = () => {
    console.log(vid)
    return (
        <div className='clip'>
            <div className='clipCard'>
                <video  autoPlay controls src={vid}></video>
                <div className="text">
                    <div className="profile">
                        <img src={pics2} alt="" />
                        <div>
                            <div className="followBtnAndNameContainer">
                                <h5>James</h5>
                                <button size={"xs"}>Follow</button>
                            </div>
                            <p>
                                You can add webfontssdf...
                            </p>
                        </div>
                    </div>
                </div>
                <div className='reactionContainer'>
                    <div className='reactionIcon'>
                        <HiHeart />
                        <h5>20k</h5>
                    </div>
                    <div className='reactionIcon'>
                        <HiChat />
                        <h5>20k</h5>
                    </div>
                    <div className='reactionIcon'>
                        <HiArrowUp />
                    </div>
                    <div className='reactionIcon'>
                        <HiArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clips