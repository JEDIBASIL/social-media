import profileImg from "../../static/images/anime.jpg";
import profileImg2 from "../../static/images/lolita.jpg";
import profileImg3 from "../../static/images/Reading book-cuate.png";
import { Menu, TextInput } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock,BiCommentDots } from "react-icons/bi";
import {FaHeart,FaStar, FaFacebookMessenger} from 'react-icons/fa'
const PostCard = () => {
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
      <p className="postCaption">LIFE IS GOOD 💀</p>
      <div className="postDetails">

      </div>

      <div className="postContent grid4">
        <img src={profileImg2} alt="" />
        <img src={profileImg2} alt="" />
        <img src={profileImg2} alt="" />
        <img src={profileImg2} alt="" />
      </div>

      <div className="postReactions">
        <div className="postCommentSection">
          <TextInput size={"md"} radius={"xl"} placeholder={"Write a comment..."} icon={<BiCommentDots />} />
        </div>
          <div className="postReactionsContent">
          <div className="postReactionIconContainer"><FaFacebookMessenger /></div>
            <div className="postReactionIconContainer"><FaHeart /></div>
            <div className="postReactionIconContainer"><FaStar /></div>
          </div>
      </div>
    </div>
  );
};

export default PostCard;
