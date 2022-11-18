import { Tabs } from '@mantine/core';
import React, { useState } from 'react'
import PostCard from '../../components/user/PostCard';
import ProfileDetails from '../../components/user/ProfileDetails';
import ProfileFollowers from '../../components/user/ProfileFollowers';
import SuggestedToFollow from '../../components/user/SuggestedToFollow';
const Profile = () => {
  const [followersModal, setFollowersModal] = useState(false);

  return (
    <div className='Profile'>
      <ProfileFollowers followersModal={followersModal} setFollowersModal={setFollowersModal} />
      <div style={{ width: "100%" }}>
        <ProfileDetails setFollowersModal={setFollowersModal} />
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