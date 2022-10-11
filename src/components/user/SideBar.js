import {Link as A,useLocation} from 'react-router-dom'
import { BiSearch, BiMoviePlay,BiMessageDetail,BiCompass, BiHeart } from "react-icons/bi";
import profileImg from "../../static/images/lolita.jpg"
import { TextInput, } from "@mantine/core";
import { GoHome } from 'react-icons/go';
import {GrAppsRounded} from 'react-icons/gr'
import logo from "../../static/images/M.png"
const SideBar = () => {
  const location = useLocation();
  return (
    <nav className="sideBar">
      <div className="searchBar-Logo">
        <div className="logo">
          <A to={"/"}><img src={logo} alt="" /></A>
        </div>
        <div>
          <TextInput radius={50} size={"md"} icon={<BiSearch style={{fontSize:"26px"}} />} placeholder={"Search..."} />
        </div>
      </div>
      <menu className='navigators'>
        <A to={"/"} className={location.pathname==='/' && 'active'} href="">
          <GoHome />
          <span>Home</span>
        </A>

        <A to={"/activity"} className={location.pathname==='/activity' && 'active'}  href="">
          <BiHeart />
          <span>Activity</span>
        </A>

        <A to={"/explore"} className={location.pathname==='/explore' && 'active'}  href="">
          <BiCompass />
          <span>Explore</span>
        </A>

        <A to={"/clip"} className={location.pathname==='/clips' && 'active'}  href="">
          <BiMoviePlay />
          <span>Clips</span>
        </A>

        <A to={"/chats"} className={location.pathname==='/chats' && 'active'}  href="">
          <BiMessageDetail />
          <span>Chats</span>
        </A>
      </menu>

      <menu>
        <A to={"/"} href="">
          <GrAppsRounded />
          <span>Menu</span>
        </A>

        <A to={"/profile"} href="" className="profileImg">
         <img src={profileImg} alt="" />
        </A>

      </menu>
    </nav>
  );
};

export default SideBar;
