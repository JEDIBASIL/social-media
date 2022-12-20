import profileImg from "../../static/images/anime.jpg";
import { Menu, TextInput } from "@mantine/core";
import { BiUser, BiBlock } from "react-icons/bi";
import { TfiHeart, TfiComment, TfiShare, TfiMore } from "react-icons/tfi"
import { MdVolumeUp, MdVolumeOff, MdPlayArrow, MdPause, MdZoomOutMap } from "react-icons/md"
import { useRef, useState } from "react";


const PostCard = ({ title, media, showModal }) => {
  const videoElement = useRef(null)
  const clickRef = useRef();
  const [videoStatus, setVideoStatus] = useState({
    isPlaying: true,
    isMute: false,
    progress: 0,
    duration: 0,
    currentTime:0
  })

  const onTogglePlaying = () => {
    videoStatus.isPlaying ? videoElement.current.pause() : videoElement.current.play()
    setVideoStatus({ ...videoStatus, isPlaying: !videoStatus.isPlaying })
  }

  const onToggleMute = () => {
    setVideoStatus({ ...videoStatus, isMute: !videoStatus.isMute })
  }

  const onPlaying = () => {
    const duration = videoElement.current.duration;
    const ct = videoElement.current.currentTime;
    setVideoStatus({ ...videoStatus, progress: ct / duration * 100, duration, currentTime:ct })
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    videoElement.current.currentTime = divprogress / 100 * videoStatus.duration;

  }


  return (
    <div className="card">
      <div className="postProfile">
        <div className="profileDetails">
          <img src={"data:image/jpeg;base64,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"} alt="" />
          <div>
            <h4>Shadow</h4>
            <span>1 hour ago</span>
          </div>
        </div>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button className="more">
              <TfiMore />
            </button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item color={"blue"} icon={<BiUser />}>
              View profile
            </Menu.Item>
            <Menu.Item icon={<BiBlock />} color={"red"}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <p className="postCaption">
        {title}
      </p>
      <div className="postDetails">

      </div>

      {
        (media !== null && media !== undefined && media.length !== undefined && media.length !== 0)
        &&
        <div className={media.length == 1 ? "postContent" : `postContent C${media.length}_card`}>
          {
            media.map(file =>
              (file.extName === "mp4" || file.extName === "mov") ?
                <div className="previewCard">
                  <video onClick={onTogglePlaying} onTimeUpdate={onPlaying} muted={videoStatus.isMute} playsInline webkit-playsInline  ref={videoElement} autoPlay src={file.media}></video>
                  <div className="video_controls">
                    <div className="controls_icons_label">
                    <div  className="control_icons_container">
                      <div className="control_icon" onClick={onTogglePlaying}>
                        {videoStatus.isPlaying ? <MdPlayArrow /> : <MdPause />}
                      </div>
                      <p>{parseInt(videoStatus.currentTime+"")}/{parseInt(videoStatus.duration+"")}</p>
                      </div>
                      <div  className="control_icons_container">
                        <div className="control_icon" onClick={onToggleMute}>
                          {!videoStatus.isMute ? <MdVolumeUp /> : <MdVolumeOff />}
                        </div>
                        <div className="control_icon">
                         <MdZoomOutMap />
                        </div>
                      </div>
                    </div>

                    <div onClick={checkWidth} ref={clickRef} className="progress_track_container">
                      <div className="progress_track">
                        <div style={{ width: `${videoStatus.progress}%` }} className="progress_track_bar">
                          <div className="progress_track_thumb">

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                :
                <div className="previewCard">
                  <img src={file.media} alt="" />
                </div>)
          }
        </div>
      }

      <div className="postReactions">
        {/* <div className="postCommentSection">
          <TextInput variant={"filled"} size={"sm"} radius={"50px"} placeholder={"Write a comment..."} icon={<BiCommentDots />} />
        </div> */}
        <div className="postReactionsContent">
          <div className="postReactionIconContainer">
            <TfiComment />
            <h6>200</h6>
          </div>
          <div className="postReactionIconContainer">
            <TfiHeart />
            <h6>200</h6>
          </div>
          <div className="postReactionIconContainer">
            <TfiShare />
            <h6>200</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
