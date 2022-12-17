import { Link as A, useLocation } from 'react-router-dom'
import { BiSearch, BiMoviePlay, BiMessageDetail, BiCompass, BiBell, BiUser, BiCog, BiSun, BiMoon, BiPowerOff, BiQuestionMark, BiBook } from "react-icons/bi";
import profileImg from "../../static/images/lolita.jpg"
import { Menu, TextInput, } from "@mantine/core";
import { GoHome } from 'react-icons/go';
import { GrAppsRounded } from 'react-icons/gr'
import logo from "../../static/images/M.png"
const SideBar = () => {
  const location = useLocation();
  return (
    <nav className="sideBar">
      <div className="searchBar-Logo">
        <div className="logo">
          <A to={"/"}><img src={logo} alt="" /></A>
        </div>
        <div className='searchBarContainer'>
          <TextInput variant={"default"} radius={50} size={"md"} icon={<BiSearch style={{ fontSize: "26px" }} />} placeholder={"Search..."} />
        </div>
      </div>
      <menu className='navigators'>
        <A to={"/"} className={location.pathname === '/' && 'active'}>
          <GoHome />
          <span>Home</span>
        </A>
        <A to={"/explore"} className={location.pathname === '/explore' && 'active'}>
          <BiCompass />
          <span>Explore</span>
        </A>

        <A to={"/clips"} className={location.pathname === '/clips' && 'active'}>
          <BiMoviePlay />
          <span>Clips</span>
        </A>

        <A to={"/chats"} className={location.pathname === '/chats' && 'active'}>
          <BiMessageDetail />
          <span>Chats</span>
        </A>
      </menu>

      <menu>
        <A to={"/activity"} className={location.pathname === '/activity' && 'active'}>
          <BiBell />
          <span>Activity</span>
        </A>


        <div className={"sideBarMenu"}>
          <Menu position={"right-start"} shadow="md" withArrow width={300}>
            <Menu.Target>
              <button className='profileImg'>
                <img src={profileImg} alt="" />
              </button>
            </Menu.Target>

            <Menu.Dropdown>
            <Menu.Label><h3>Account</h3></Menu.Label>
              <A to={"/profile"}>
                <Menu.Item icon={<BiUser />}>
                  <h4>View profile</h4>
                </Menu.Item>
              </A>
              <A to={"/settings-privacy"}>
                <Menu.Item icon={<BiCog />}>
                  <h4>Settings & Privacy</h4>
                </Menu.Item>
              </A>

              <Menu.Divider />
              <Menu.Label><h3>Theme</h3></Menu.Label>
              <Menu.Item icon={<BiSun />}>
                  <h4>Light</h4>
                </Menu.Item>
                <Menu.Item icon={<BiMoon />}>
                  <h4>Dark</h4>
                </Menu.Item>

                <Menu.Item icon={<BiMoon style={{fill:"royalblue"}}/>}>
                  <h4>Blue</h4>
                </Menu.Item>
                <Menu.Divider />
                <A to={"/settings-privacy"}>
                <Menu.Item icon={<BiQuestionMark />}>
                  <h4>Help</h4>
                </Menu.Item>
              </A>
              <A to={"/settings-privacy"}>
                <Menu.Item icon={<BiBook />}>
                  <h4>About</h4>
                </Menu.Item>
              </A>
                <Menu.Divider />
                <A to={"/settings-privacy"}>
                <Menu.Item icon={<BiPowerOff />}>
                  <h4>Logout</h4>
                </Menu.Item>
              </A>
            </Menu.Dropdown>
          </Menu>
        </div>

      </menu>
    </nav>
  );
};

export default SideBar;
