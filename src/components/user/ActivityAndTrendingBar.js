import { Button, Center, Menu } from "@mantine/core";
import { BiUser, BiBlock } from "react-icons/bi";
import {TfiMore} from "react-icons/tfi"
const ActivityAndTrendingBar = () => {
  return (
    <div className="ActivityAndTrendingBar">
      <h3 className="heading">Activity</h3>
      <div className="activityCardContainer">
        <div className="card">
          <img src={"https://pbs.twimg.com/media/ERn62xjXsAAPuPU?format=jpg&name=medium"} alt="" />
          <div className="text">
            <p><span>James</span> added an new post</p>
            <span className="time">1 hour ago</span>
          </div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="more">
                <TfiMore />
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
          <img src={"https://pbs.twimg.com/media/ERn62xjXsAAPuPU?format=jpg&name=medium"} alt="" />
          <div className="text">
            <p><span>James</span> added an new post</p>
            <span className="time">1 hour ago</span>
          </div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="more">
                <TfiMore />
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
          <img src={"https://pbs.twimg.com/media/ERn62xjXsAAPuPU?format=jpg&name=medium"} alt="" />
          <div className="text">
            <p><span>James</span> added an new post</p>
            <span className="time">1 hour ago</span>
          </div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="more">
                <TfiMore />
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
          <img src={"https://pbs.twimg.com/media/ERn62xjXsAAPuPU?format=jpg&name=medium"} alt="" />
          <div className="text">
            <p><span>James</span> added an new post</p>
            <span className="time">1 hour ago</span>
          </div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="more">
                <TfiMore />
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
    </div>
  );
};

export default ActivityAndTrendingBar;
