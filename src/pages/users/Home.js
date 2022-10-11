import { Button, Modal } from "@mantine/core"
import ActivityAndTrendingBar from "../../components/user/ActivityAndTrendingBar"
import CreatePost from "../../components/user/CreatePost"
import HomeSideBarDetails from "../../components/user/HomeSideBarDetails"
import PostCard from "../../components/user/PostCard"
import UpgradeAds from "../../components/user/UpgradeAds"

const Home = () => {
  return (
    <div className="homeContainer">
      <Modal radius={10} centered opened={false}>
        <Button radius={50}>Hello</Button>
      </Modal>
       <div style={{position:"sticky", top:"-210px"}}>
       <HomeSideBarDetails />
       <UpgradeAds />
       </div>

        <div className="postContainer">
          <div><CreatePost /></div>
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
        <ActivityAndTrendingBar />
    </div>
  )
}

export default Home