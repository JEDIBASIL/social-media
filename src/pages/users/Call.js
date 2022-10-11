import { Button } from "@mantine/core"
import {  } from "react-icons/di"
import { MdMicOff, MdCallEnd, MdVideocamOff, MdZoomOutMap } from "react-icons/md"
import {HiUserAdd} from 'react-icons/hi'
import pics from '../../static/images/anime.jpg'
import Webcam from "react-webcam"
const Call = () => {
  return (
    <div className="call">
        <div className="callDetails answered">
        <video src=""></video>
         <div> 
          <img src={pics} alt="" />
          <h2>Melva</h2>
          <p>Calling</p></div>
        </div>
        <div className="callIcons">
             <Button color={"gray"} radius={"10px"}>
            <MdZoomOutMap />
            </Button>
            <Button color={"gray"} radius={"10px"}>
            <HiUserAdd />
            </Button>
            <Button color={"gray"} radius={"10px"}>
            <MdMicOff />
            </Button>
            <Button color={"gray"} radius={"10px"}>
            <MdVideocamOff />
            </Button>
            <Button color={"red"} radius={"10px"}><MdCallEnd /></Button>
        </div>

        <div className="Webcam">
          <Webcam />
        </div>
    </div>
  )
}

export default Call