import { Link as A, useLocation } from 'react-router-dom'
import { BiUser, BiMoon, BiPowerOff, BiQuestionMark, BiBook } from "react-icons/bi";
import { TfiHome, TfiBell, TfiCommentAlt, TfiVideoClapper, TfiGallery, TfiSettings, TfiSearch } from "react-icons/tfi"
import profileImg from "../../static/images/lolita.jpg"
import { Menu, Switch, TextInput, Drawer } from "@mantine/core";
import { GoHome } from 'react-icons/go';
import { GrAppsRounded } from 'react-icons/gr'
import logo from "../../static/images/M.png"
import { useState } from 'react';
const SideBar = ({theme, setTheme, presentTheme}) => {
  const location = useLocation();
  const [profileDrawer, setProfileDrawer] = useState(false)
  return (
    <nav className="sideBar">
      <div className="searchBar-Logo">
        <div className="logo">
          <A to={"/"}><img src={logo} alt="" /></A>
        </div>
        <div className='searchBarContainer'>
          <div className='search_icon'>
            <TfiSearch style={{ fontSize: "26px" }} />
          </div>
          <div className='search_input'>
            <TextInput variant={"default"} radius={50} size={"md"} icon={<TfiSearch style={{ fontSize: "20px" }} />} placeholder={"Search..."} />
          </div>
        </div>
      </div>
      <div className='menu_container'>

        <menu className='navigators'>
          <A to={"/"} className={location.pathname === '/' && 'active'}>
            <TfiHome />
            <span>Home</span>
          </A>
          <A to={"/explore"} className={location.pathname === '/explore' && 'active'}>
            <TfiGallery />
            <span>Explore</span>
          </A>

          <A to={"/clips"} className={location.pathname === '/clips' && 'active'}>
            <TfiVideoClapper />
            <span>Clips</span>
          </A>

          <A to={"/chats"} className={location.pathname === '/chats' && 'active'}>
            <TfiCommentAlt />
            <span>Chats</span>
          </A>
        </menu>

        <menu>
          <A to={"/activity"} className={location.pathname === '/activity' && 'active'}>
            <TfiBell />
            <span>Activity</span>
          </A>


          <div className={"sideBarMenu"}>
                <button onClick={()=> setProfileDrawer(true)} className='profileImg'>
                  <img src={profileImg} alt="" />
                </button>
          </div>

        </menu>
      </div>
      <Drawer
        opened={profileDrawer}
        onClose={()=> setProfileDrawer(false)}
        overlayBlur={2}
        padding="md"
        position='right'
        data-theme={presentTheme}
      >
        <div className='drawer_container'>
          <div>
            <h3 className='drawer_label'  >Account</h3>
            <A className='drawer_item' to={"/profile"}>
              <BiUser />
              <h4>View profile</h4>
            </A>

            <A className='drawer_item' to={"/settings-privacy"}>
              <TfiSettings />
              <h4>Settings & Privacy</h4>
            </A>

            <h3 className='drawer_label'>Theme</h3>
            <div className='drawer_item'>
              <BiMoon />
              <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h4>Dark</h4>
                <Switch onChange={()=> {
                  setTheme(!theme)
                }} />
              </div>
            </div>

            <h3 className='drawer_label'></h3>

            <A className='drawer_item' to={"/settings-privacy"}>
              <BiQuestionMark />
              <h4>Help</h4>
            </A>
            <A className='drawer_item' to={"/settings-privacy"}>
              <BiBook />
              <h4>About</h4>
            </A>
            <A className='drawer_item' to={"/settings-privacy"}>
              <BiPowerOff />
              <h4>Logout</h4>
            </A>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default SideBar;
