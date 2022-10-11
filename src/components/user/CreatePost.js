import { TextInput } from '@mantine/core'
import { HiSpeakerphone } from 'react-icons/hi'
import {FcAddImage, FcVideoCall, FcAdvertising} from "react-icons/fc"
import { ImVideoCamera } from "react-icons/im"
import React from 'react'

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