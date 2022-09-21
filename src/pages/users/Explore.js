import React from 'react'
import ExploreCategories from '../../components/user/ExploreCategories'
import ExploreTrending from '../../components/user/ExploreTrending'
import PostCard from '../../components/user/PostCard'

const Explore = () => {

  return (
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
  )
}

export default Explore