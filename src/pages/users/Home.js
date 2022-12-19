import { Button, Modal } from "@mantine/core"
import { useEffect, useState } from "react"
import ActivityAndTrendingBar from "../../components/user/ActivityAndTrendingBar"
import CreatePost from "../../components/user/CreatePost"
import HomeSideBarDetails from "../../components/user/HomeSideBarDetails"
import LargePostCard from "../../components/user/LargePostCard"
import PostCard from "../../components/user/PostCard"
import UpgradeAds from "../../components/user/UpgradeAds"

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    console.log(posts)
  })
  return (
    <div className="homeContainer">
      <Modal overlayBlur={"5"} radius={10} shadow="xl" centered opened={false}>
        <Button radius={50}>Hello</Button>
      </Modal>

      <LargePostCard opened={showModal} closeModal={setShowModal} />

      <div style={{ position: "sticky", top: "-210px" }}>
        <HomeSideBarDetails />
        <UpgradeAds />
      </div>

      <div className="postContainer">
        <div>
          <CreatePost posts={posts} setPosts={setPosts} />
        </div>
        {
          posts.map(({title, image}, i) =>  <PostCard key={i} title={title} media={image} showModal={setShowModal} />)
        }
      </div>
      <ActivityAndTrendingBar />
    </div>
  )
}

export default Home