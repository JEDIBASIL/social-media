import { TextInput } from '@mantine/core'
import {FcAddImage, FcVideoCall, FcAdvertising} from "react-icons/fc"

const CreatePost = () => {
  return (
    <div className='CreatePost'>
        
        <TextInput icon={<FcAdvertising style={{fontSize:"30px"}} />} variant='unstyled' placeholder="What's new" size='xl'/>
       <div className='creatPostType'>
       <button><FcAddImage /> <p>Photo/Video</p></button>
       <button><FcVideoCall /> <p>Go live</p></button>
       </div>
    </div>
  )
}

export default CreatePost