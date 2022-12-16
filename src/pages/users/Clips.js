import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { HiHeart, HiChat, HiArrowUp,HiArrowDown, HiPlay, HiOutlineVolumeUp } from "react-icons/hi"
import pics2 from "../../static/images/anime.jpg";
import vid from "../../static/images/vid.mp4"
const Clips = () => {
    const clipVid = useRef(null)
    const [clipVidControls, setClipVidControls] = useState({
        muted:true,
        playing:false
    })
   const onPauseToggle = () => {
    setClipVidControls({...clipVidControls, playing:true})
    clipVidControls.playing ? clipVid.current.play() : clipVid.current.pause()
    console.log(clipVidControls)
    }

    const onMutedToggle = (e) =>{
        setClipVidControls({muted:this.muted, ...clipVidControls})
        console.log(clipVidControls)
    }
    useEffect(()=>{
        console.log(clipVid.current)
        clipVid.current.play()

    })
    console.log(vid)
    return (
        <div className='clip'>
            <div className='clipCard'>
                <div className='vid_controls'>
                <HiPlay onClick={onPauseToggle}  />
                <HiOutlineVolumeUp onClick={onMutedToggle} />

                </div>
                <video ref={clipVid} autoPlay muted={clipVidControls.muted} src={vid}></video>
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