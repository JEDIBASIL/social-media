import { Modal } from "@mantine/core"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pics from "../../static/images/anime.jpg"
import girl from "../../static/images/lolita.jpg"
const LargePostCard = ({ closeModal, opened }) => {
    return (
        <div >
            <Modal
                overlayBlur={"5"}
                radius={10}
                shadow="xl"
                centered
                opened={opened}
                onClose={()=>closeModal(false)}
                className='BigPostCard'
            >
                <div className="BigPostCardContent">
                    <div className="imagePreview">
                        <Swiper
                            pagination={{
                                clickable: true,
                                dynamicBullets: true
                            }}
                            navigation={true}
                            modules={[Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="imagePreviewCard">
                                    <img src={pics} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="imagePreviewCard">
                                    <img src={girl} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="commentSection">

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default LargePostCard