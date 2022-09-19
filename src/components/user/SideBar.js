import React from "react";
import { BiSearch, BiHomeSmile, BiHeart, BiMoviePlay,BiMenuAltLeft,BiMessageDetail,BiCompass } from "react-icons/bi";
import profileImg from "../../static/images/lolita.jpg"
import { TextInput, } from "@mantine/core";
const SideBar = () => {
  return (
    <nav className="sideBar">
      <div className="searchBar-Logo">
        <div className="logo">
          <a>Let's Meet</a>
        </div>
        <div>
          <TextInput radius={"xl"} size={"md"} icon={<BiSearch />} placeholder={"Search..."} />
        </div>
      </div>
      <menu>
        <a className="active" href="">
          <BiHomeSmile />
          <span>Home</span>
        </a>

        <a href="">
          <BiHeart />
          <span>Activity</span>
        </a>

        <a href="">
          <BiCompass />
          <span>Explore</span>
        </a>

        <a href="">
          <BiMoviePlay />
          <span>Clips</span>
        </a>

        <a href="">
          <BiMessageDetail />
          <span>Chats</span>
        </a>
      </menu>

      <menu>
        <a href="">
          <BiMenuAltLeft />
        </a>

        <a href="" className="profileImg">
         <img src={profileImg} alt="" />
        </a>

      </menu>
    </nav>
  );
};

export default SideBar;
