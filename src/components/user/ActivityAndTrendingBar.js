import { Button, Center, Menu } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock } from "react-icons/bi";
const ActivityAndTrendingBar = () => {
  return (
    <div className="ActivityAndTrendingBar">
      <h3 className="heading">Activity</h3>

        {/* <div className="activityContainer">
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
        </div> */}
      {/* <div className="noActivity">
        <Center><BiBellOff /></Center>
        <Center><p>Your recent activity will show up here</p></Center>
      </div> */}

<div className="activityCardContainer">
        <div className="card">
          <img src={"https://pbs.twimg.com/media/ERn62xjXsAAPuPU?format=jpg&name=medium"} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or. The
             ...
            </p>
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
        <div className="card">
          <img src={"https://pbs.twimg.com/media/FdN5sA-XoAARUDA?format=jpg&name=900x900"} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or. The
             ...
            </p>
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
        <div className="card">
          <img src={"https://pbs.twimg.com/media/FdHreMWXEAA6MF_?format=jpg&name=small"} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or. The
             ...
            </p>
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
        <Center mt={20}><Button radius={50} variant={"outline"}>See more</Button></Center>
        
      </div>
    </div>
  );
};

export default ActivityAndTrendingBar;
