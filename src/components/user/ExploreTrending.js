import pics from "../../static/images/lolita.jpg";
import { HiHeart } from "react-icons/hi";
import {FaComment} from "react-icons/fa"
import { Button } from "@mantine/core";
const ExploreTrending = () => {
  return (
    <div className="ExploreTrending">
      <h4>Trending</h4>
      <div className="trendingPostContainer">
        <div className="card">
          <img src={pics} alt="" />
          <div className="text">
            <div className="reactions">
              <div>
                <HiHeart />
                <p>2,000</p>
              </div>
              <div>
                <FaComment />
                <p>2,000</p>
              </div>
            </div>
            <div className="profile">
              <img src={pics} alt="" />
              <div>
                <div className="followBtnAndNameContainer">
                <h5>James</h5>
                <button size={"xs"}>Follow</button>
                </div>
                <p>
                  You can add webfontssdf...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={"https://pbs.twimg.com/media/ERn62xjXsAAPuPU?format=jpg&name=medium"} alt="" />
          <div className="text">
            <div className="reactions">
              <div>
                <HiHeart />
                <p>2,000</p>
              </div>
              <div>
                <FaComment />
                <p>2,000</p>
              </div>
            </div>
            <div className="profile">
              <img src={pics} alt="" />
              <div>
                <div className="followBtnAndNameContainer">
                <h5>James</h5>
                <button size={"xs"}>Follow</button>
                </div>
                <p>
                  You can add webfontssdf...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={"https://pbs.twimg.com/media/FhtpsILXkAA74cj?format=jpg&name=360x360"} alt="" />
          <div className="text">
            <div className="reactions">
              <div>
                <HiHeart />
                <p>2,000</p>
              </div>
              <div>
                <FaComment />
                <p>2,000</p>
              </div>
            </div>
            <div className="profile">
              <img src={pics} alt="" />
              <div>
                <div className="followBtnAndNameContainer">
                <h5>James</h5>
                <button size={"xs"}>Follow</button>
                </div>
                <p>
                  You can add webfontssdf...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={"https://pbs.twimg.com/media/FhtP56kWQAEhpIN?format=jpg&name=small"} alt="" />
          <div className="text">
            <div className="reactions">
              <div>
                <HiHeart />
                <p>2,000</p>
              </div>
              <div>
                <FaComment />
                <p>2,000</p>
              </div>
            </div>
            <div className="profile">
              <img src={pics} alt="" />
              <div>
                <div className="followBtnAndNameContainer">
                <h5>James</h5>
                <button size={"xs"}>Follow</button>
                </div>
                <p>
                  You can add webfontssdf...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTrending;
