import ActivityAndTrendingBar from "../../components/user/ActivityAndTrendingBar"
import HomeSideBarDetails from "../../components/user/HomeSideBarDetails"
import PostCard from "../../components/user/PostCard"
import UpgradeAds from "../../components/user/UpgradeAds"

const Home = () => {
  return (
    <div className="homeContainer">

       <div>
       <HomeSideBarDetails />
       <UpgradeAds />
       </div>

        <div className="postContainer">
            <PostCard />
            <PostCard />
            <PostCard />
        </div>

        <ActivityAndTrendingBar />
    </div>
  )
}

export default Home