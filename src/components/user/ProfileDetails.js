import { Button, Menu } from '@mantine/core';
import pics from "../../static/images/anime.jpg"
import { BiBlock, BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdVerified } from 'react-icons/md';

const ProfileDetails = ({setFollowersModal}) => {
    return (
        <div className='profileDetailsContainer'>
            <div className='profileImgContainer'>
                <img className='backgroundCoverPics' src={pics} alt="" />
                <img className='profilePics' src={pics} alt="" />
                <h2 className='profileName'>Emem Basil Kingsley-Umana <MdVerified /></h2>
            </div>

            <div className='followAndMore'>
                <div className='followersOverview'>
                    <p onClick={() => setFollowersModal(true)}>1,555 <span >Following</span></p>
                    <p onClick={() => setFollowersModal(true)}>4M <span>Followers</span></p>
                </div>
                <div className='profileActionsContainer'>
                    <Menu withArrow withinPortal shadow="xs" width={200}>
                        <Menu.Target>
                            <button className="more">
                                <BiDotsHorizontalRounded />
                            </button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item icon={<BiBlock />} color={"red"}>
                                Block
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <Button variant={"outline"} radius={50} color={"white"}>Message</Button>
                    <Button radius={50}>Follow</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails