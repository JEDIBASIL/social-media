import { FaFire, FaGamepad, FaMusic, FaRobot } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Chip } from '@mantine/core';
const ExploreCategories = () => {

  return (
    <div>
      <Chip.Group>
        <div className="mySwiper ExploreCategories">
            <div className="card">
              <Chip variant='filled' radius={8}>
                  <FaFire />
                  <h3>Entertainment</h3>
              </Chip>
            </div>
            <div className="card">
              <Chip variant='filled' radius={8}>
                  <FaMusic />
                  <h3>Music</h3>
              </Chip>
            </div>
            <div className="card">
              <Chip variant='filled' radius={8}>
                  <FaGamepad />
                  <h3>Games</h3>
              </Chip>
            </div>
        </div>
      </Chip.Group>
    </div>
  )
}

export default ExploreCategories