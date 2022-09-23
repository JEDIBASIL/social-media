import React from 'react'
import ActivityAndTrendingBar from '../../components/user/ActivityAndTrendingBar'
import ExploreCategories from '../../components/user/ExploreCategories'
import ExploreTrending from '../../components/user/ExploreTrending'
import HomeSideBarDetails from '../../components/user/HomeSideBarDetails'
import PostCard from '../../components/user/PostCard'
import UpgradeAds from '../../components/user/UpgradeAds'


const Explore = () => {

  return (
    <div className="homeContainer">
       <div>
       <HomeSideBarDetails />
       <UpgradeAds />
       </div>
    <div className='exploreContainer'>
      <ExploreCategories />
      <div className='exploreTrendingPost'>
      <ExploreTrending />
      <div className="postContainer">
        <PostCard />
        <PostCard />
      </div>
      </div>
    </div>

     <ActivityAndTrendingBar />
     </div>
  )
}

export default Explore