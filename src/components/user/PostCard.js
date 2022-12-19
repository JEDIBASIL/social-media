import profileImg from "../../static/images/anime.jpg";
import { Menu, TextInput } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock, BiCommentDots, BiShare } from "react-icons/bi";
import { RiHeartFill, RiChatQuoteFill } from "react-icons/ri"
import { useEffect } from "react";
const PostCard = ({ title, media, showModal }) => {
 
  return (
    <div className="card">
      <div className="postProfile">
        <div className="profileDetails">
          <img src={profileImg} alt="" />
          <div>
            <h4>Shadow</h4>
            <span>1 hour ago</span>
          </div>
        </div>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button className="more">
              <BiDotsVerticalRounded />
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
        {/* Grammarly works instantly across websites and desktop applications to ensure everything you type is mistake-free, clear, and professional. Download now! 💀</p> */}
      </p>
      <div className="postDetails">

      </div>
      {/* C2_card */}

      {
        (media !== null && media !== undefined && media.length !== undefined && media.length !== 0)
        &&
        <div onClick={() => showModal(true)} className={media.length == 1 ? "postContent" : `postContent C${media.length}_card`}>
          {
              media.map(file => 
              <div className="previewCard">
                <img src={file.media} alt="" />
              </div>)
            }
        </div>
      }

      <div className="postReactions">
        <div className="postCommentSection">
          <TextInput variant={"filled"} size={"sm"} radius={"50px"} placeholder={"Write a comment..."} icon={<BiCommentDots />} />
        </div>
        <div className="postReactionsContent">
          <div className="postReactionIconContainer">
            <RiChatQuoteFill />
            <h6>200</h6>
          </div>
          <div className="postReactionIconContainer">
            <RiHeartFill />
            <h6>200</h6>
          </div>
          <div className="postReactionIconContainer">
            <BiShare />
            <h6>200</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
