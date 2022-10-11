import { Button, Menu, Modal, Tabs } from '@mantine/core';
import React, { useState } from 'react'
import { BiBlock, BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdVerified, MdArrowBack } from 'react-icons/md';
import PostCard from '../../components/user/PostCard';
import SuggestedToFollow from '../../components/user/SuggestedToFollow';

const Profile = () => {
  const [followersModal, setFollowersModal] = useState(false);

  return (
    <div className='Profile'>
      <Modal styles={{
        modal:{
          width:"600px"
        }
      }} 
      withCloseButton={false} transition={"slide-up"} opened={followersModal} overflow="inside" overlayBlur={3} style={{height:"calc(100vh - 30px)"}} 
      title={
      <div style={{gap:"20px",display:"flex", justifyContent:"space-between"}}>
         <MdArrowBack onClick={()=>{setFollowersModal(false)}} className='backArrow' />
        <h4>Emem Basil Kingsley-Umana followers</h4>
      </div>
    }>
          <div>
             <Tabs             
          defaultValue="followers">
            <Tabs.List grow position={"center"}>
            <Tabs.Tab value="mutual-followers">
                <h4>Mutual followers</h4>
              </Tabs.Tab>
              <Tabs.Tab value="followers">
                <h4>Followers</h4>
              </Tabs.Tab>
              <Tabs.Tab value="following">
                <h4>Following</h4>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="followers" pt="xs">

            </Tabs.Panel>

            <Tabs.Panel value="following" pt="xs"></Tabs.Panel>
          </Tabs>
          </div>
      </Modal>
      <div style={{width:"100%"}}>
        <div className='profileDetailsContainer'>
          <div className='profileImgContainer' style={{backgroundImage: "url('https://media-exp1.licdn.com/dms/image/C4D1BAQFBig5fjxcIVQ/company-background_10000/0/1611078993169?e=1665442800&v=beta&t=8xQX9ty5wwL355LWDuwBcWKroKKdBw02bBtscBN61Uk')"}}>
              <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFar7b4r3VTkw/company-logo_100_100/0/1654092423317?e=1672876800&v=beta&t=HLGhtbUMRV6ItZKejsxQ7IXeZXB_iNUntVxu8O9c7Bc" alt="" />
              <h2 className='profileName'>Emem Basil Kingsley-Umana <MdVerified /></h2>
          </div>

          <div className='followAndMore'>
            <div className='followersOverview'>
            <p onClick={()=>{setFollowersModal(true)}}>1,555 <span >Following</span></p>
            <p onClick={()=>{setFollowersModal(true)}}>4M <span>Followers</span></p>
            </div>
            <div className='profileActionsContainer'>
            <Menu withArrow withinPortal  shadow="xs" width={200}>
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
        <div className='profileMediaAndSuggested'>
          <div className='profileTab'>
          <Tabs             
          defaultValue="post">
            <Tabs.List grow position={"center"}>
              <Tabs.Tab value="post">
                <h4>All</h4>
              </Tabs.Tab>
              <Tabs.Tab value="media">
                <h4>Media</h4>
              </Tabs.Tab>
              <Tabs.Tab value="clips">
                <h4>Clips</h4>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="post" pt="xs">
            <div className="postContainer">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            </Tabs.Panel>

            <Tabs.Panel value="Media" pt="xs"></Tabs.Panel>
          </Tabs>
          </div>
          <SuggestedToFollow />
        </div>
        </div>
    </div>
  )
}

export default Profile