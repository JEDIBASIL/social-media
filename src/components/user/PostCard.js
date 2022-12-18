import profileImg from "../../static/images/anime.jpg";
import { Menu, TextInput } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock, BiCommentDots, BiShare } from "react-icons/bi";
import { RiHeartFill, RiChatQuoteFill} from "react-icons/ri"

import { HiHeart, HiChat } from "react-icons/hi"
const PostCard = ({ title, image, showModal }) => {
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
      <p className="postCaption">Grammarly works instantly across websites and desktop applications to ensure everything you type is mistake-free, clear, and professional. Download now! 💀</p>
      <div className="postDetails">

      </div>

      <div onClick={() => showModal(true)} className="postContent C4_card">
        <div className="previewCard">
          <img src="https://pbs.twimg.com/media/FdLhlX7XwAEeAjd?format=jpg&name=900x900" alt="" />
        </div>
        <div className="previewCard">
          <img src={"https://pbs.twimg.com/media/FdWwJ0HXgAImS8U?format=jpg&name=small"} alt="" />
        </div>
        <div className="previewCard">
          <img src={"https://pbs.twimg.com/media/Fd_jMWkXEAEIEKW?format=jpg&name=small"} alt="" />
        </div>

        <div className="previewCard">
          <img src={"https://pbs.twimg.com/media/Fd_jMWkXEAEIEKW?format=jpg&name=small"} alt="" />
        </div>
      </div>

      <div className="postReactions">
        <div className="postCommentSection">
          <TextInput variant={"filled"} size={"md"} radius={"50px"} placeholder={"Write a comment..."} icon={<BiCommentDots />} />
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
