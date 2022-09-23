import { Button, Center, Menu, Tabs, Textarea, TextInput } from "@mantine/core";
import { Link as A } from 'react-router-dom'
import {
  BiUser,
  BiBlock,
  BiCommentDots,
  BiDotsHorizontalRounded,
  BiImageAdd,
  BiPaperclip,
  BiMicrophone,
} from "react-icons/bi";
import {
  BsEmojiSmile,
  BsFillEmojiSmileFill,
  BsPaperclip,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdChat, MdPhone, MdSend, MdVideoCall } from "react-icons/md";
import pic from "../../static/images/anime.jpg";
const Chat = () => {
  return (
    <div className="Chat">
      <div className="chatSideBar">
        <div className="chatSearch">
          {" "}
          <TextInput icon={<FaSearch />} placeholder="Search message" />
        </div>
        <Tabs defaultValue="all-chat">
          <Tabs.List position={"left"}>
            <Tabs.Tab value="all-chat">
              <h4>All</h4>
            </Tabs.Tab>
            <Tabs.Tab value="unread-chat">
              <h4>Unread</h4>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="all-chat" pt="xs">
            <div className="chatList">
              <div className="chatListCard active">
                <div className="img">
                  <span className="chatActive"></span>
                  <img src={pic} alt="" />
                </div>
                <div className="text">
                  <h4>Peter</h4>
                  <p>Have you seen the money</p>
                  <span className="time">1 hour ago</span>
                </div>
                <span className="chatCounter">10</span>
              </div>
              <div className="chatListCard">
                <div className="img">
                  <span className="chatActive"></span>
                  <img src={pic} alt="" />
                </div>
                <div className="text">
                  <h4>Peter</h4>
                  <p>Have you seen the money</p>
                  <span className="time">1 hour ago</span>
                </div>
                <span className="chatCounter">10</span>
              </div>
              <div className="chatListCard">
                <div className="img">
                  <span className="chatActive"></span>
                  <img src={pic} alt="" />
                </div>
                <div className="text">
                  <h4>Peter</h4>
                  <p>Have you seen the money</p>
                  <span className="time">1 hour ago</span>
                </div>
                <span className="chatCounter">10</span>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="unread-chat" pt="xs"></Tabs.Panel>
        </Tabs>
      </div>
      <div className="chatBox">
        <div className="chartTopBar">
          <div className="chatDetails">
            <div>
              <img src={pic} alt="" />
            </div>
            <div>
              <h4>Fish</h4>
              <span className="status">Active</span>
            </div>
          </div>

          <div className="chartTopBarIcons">
            <A to={"/call"}>
            <button className="more">
              <MdPhone />
            </button>
            </A>
            <A to={"/call"}>
            <button className="more">
              {" "}
              <MdVideoCall />{" "}
            </button>
            </A>

            <Menu withArrow withinPortal  shadow="xs" width={200}>
              <Menu.Target>
                <button className="more">
                  <BiDotsHorizontalRounded />
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
        </div>
        <div className="messageContainer">
          <div className="chatMessagesContainer">
            <div className="chatMessagesContent">
              <div className="chatMessage">
                  <p>When are you coming back home sdfas fasdf asdf asdf asdf asdfa sdfa sdfa sdfas dfasd fas dfas dfasd fas dfas dfasd fas dfas dfas df</p>
              </div>
            </div>
            <div className="chatMessagesContent userChatMessagesContent">
              <div className="chatMessage">
                  <p>When are you coming back home sdfas fasdf asdf asdf asdf asdfa sdfa sdfa sdfas dfasd fas dfas dfasd fas dfas dfasd fas dfas dfas df</p>
              </div>
            </div>
            <div className="chatMessagesContent ">
              <div className="chatMessage">
                  <p>When are you coming back home</p>
              </div>
            </div>
            <div className="chatMessagesContent userChatMessagesContent">
              <div className="chatMessage">
                  <p>tommorrow</p>
              </div>
            </div>

          </div>
        </div>

        <div className="composeMessageContainer">
          <div className="chatAttachments">
            {/* <Menu withArrow width={300}>
            <Menu.Target>
              <button className="more">
                <BsPaperclip />
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
          </Menu> */}
            <div className={"icons fileChooser"}>
              <input type="file" />
              <BiImageAdd />
            </div>
            <div className={"icons fileChooser"}>
              <input type="file" />
              <BiPaperclip />
            </div>
            <div className={"icons"}>
              <BsEmojiSmile />
            </div>
          </div>
          <div className="chatTextarea">
            <div className="textareaContainer">
              <MdChat />
              <textarea placeholder="Write a message"></textarea>
            </div>
            <button className="send">
              <MdSend />
            </button>
          </div>
          <div className="chatAttachments">
          <div className={"icons mic"}>
            <BiMicrophone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
