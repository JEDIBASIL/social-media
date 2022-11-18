import { Button, Center } from "@mantine/core";
import profileImg from "../../static/images/anime.jpg";

const HomeSideBarDetails = () => {
  return (
    <div className="HomeSideBar">
        <div className="userDetailsContainer">
            <div className="profileBackgroundImg">
            <img className="coverPics" src={profileImg} alt="" />
            <img className="profilePics" src={profileImg} alt="" />
            </div>
            <h3>Shadow</h3>
            <p>shadow@gmail.com</p>
        </div>
       <Center my={20}> <Button radius={"xl"}  size={"md"}>Create clip</Button> </Center>
    </div>
  )
}

export default HomeSideBarDetails