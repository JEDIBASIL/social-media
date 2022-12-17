import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { RiVolumeUpFill, RiVolumeMuteFill, RiHeartFill, RiChatQuoteFill, RiPlayFill, RiPauseFill } from "react-icons/ri"
import pics2 from "../../static/images/anime.jpg";
import vid from "../../static/images/vid.mp4"
const Clips = () => {
    const clipVid = useRef(null)
    const [clipVidControls, setClipVidControls] = useState({
        muted: false,
        playing: false
    })
    const onPauseToggle = () => {
        setClipVidControls({ ...clipVidControls, playing: !clipVidControls.playing })
        clipVidControls.playing ? clipVid.current.play() : clipVid.current.pause()
        console.log(clipVidControls)
    }

    const onMutedToggle = (e) => {
        setClipVidControls({ ...clipVidControls, muted: !clipVidControls.muted })
    }


    return (
        <div className='clip'>
            <div className='clipCard'>
                <div className='vid_controls'>
                    <span onClick={onPauseToggle}>
                        {!clipVidControls.playing ? <RiPlayFill />: <RiPauseFill />}
                    </span>
                    <span onClick={onMutedToggle} >
                        {! clipVidControls.muted ? <RiVolumeUpFill /> : <RiVolumeMuteFill />}
                    </span>

                </div>
                <video tabIndex={"-1"} playsInline webkit-playsInline  ref={clipVid} autoPlay  controls={false} muted={clipVidControls.muted} src={vid}></video>
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
                        <RiHeartFill />
                        <h5>20k</h5>
                    </div>
                    <div className='reactionIcon'>
                        <RiChatQuoteFill />
                        <h5>20k</h5>
                    </div>
                    <div className='reactionIcon'>
                    </div>
                    <div className='reactionIcon'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clips