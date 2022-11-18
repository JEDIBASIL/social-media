import pics from "../../static/images/lolita.jpg";
import { Menu } from "@mantine/core";
import { BiDotsVerticalRounded, BiUser, BiBlock } from "react-icons/bi";

const Activity = () => {
  return (
    <div className="ActivityAndTrendingBar notificationContainer">
      <h3 className="heading">Activity</h3>
      <div className="activityCardContainer">
        <div className="card">
          <img src={pics} alt="" />
          <div className="text">
            <h4>The best guiterist in the world</h4>
            <p>
              You can add webfonts, meta tags, or analytics to this file. The
              build step will...
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
  )
}

export default Activity