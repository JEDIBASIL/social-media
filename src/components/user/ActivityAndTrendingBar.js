import profileImg2 from "../../static/images/lolita.jpg";
import { Button, Center, Menu } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock,BiBellOff } from "react-icons/bi";
const ActivityAndTrendingBar = () => {
  return (
    <div className="ActivityAndTrendingBar">
      <h3>Activity</h3>
        <div className="activityContainer">
        <div className="activityBox">
        <div className="notificationDetails">
          <img src={profileImg2} alt="" />
          <div>
            <p><a href="">Kingsley</a> send you a friend request</p>

            <span className="time">1 week ago</span>
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
        </div>
      {/* <div className="noActivity">
        <Center><BiBellOff /></Center>
        <Center><p>Your recent activity will show up here</p></Center>
      </div> */}
    </div>
  );
};

export default ActivityAndTrendingBar;
