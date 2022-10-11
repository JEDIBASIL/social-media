import pics from "../../static/images/lolita.jpg";
import { Menu } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock } from "react-icons/bi";
const ExploreTrending = () => {
  return (
    <div className="ExploreTrending">
      <h4>Trending</h4>
      <div className="trendingPostContainer">
        <div className="card">
          <img src={"https://pbs.twimg.com/semantic_core_img/1576124032361140226/dlGy5tEL?format=jpg&name=small"} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or
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
          <img src={"https://pbs.twimg.com/semantic_core_img/1549915092229111809/QVqCM_5n?format=jpg&name=240x240"} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or
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
          <img src={pics} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or
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
      </div>
    </div>
  );
};

export default ExploreTrending;
