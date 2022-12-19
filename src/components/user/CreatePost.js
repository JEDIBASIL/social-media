import { Button, Textarea } from '@mantine/core'
import { useState } from 'react'
import { IoClose } from "react-icons/io5"
import {TfiAnnouncement, TfiImage, TfiVideoCamera} from "react-icons/tfi";

const CreatePost = ({posts, setPosts}) => {
  const [postText, setPostText] = useState("")
  const [postImages, setPostImages] = useState([])

  const onPost = (e) =>{
    e.preventDefault()
    console.log(postText)
    console.log({
      title:postText,
      image:postImages
    })
    setPosts([ {
      title:postText,
      image:postImages
    }, ...posts])
  }

  const getPostImages = (e) => {
    const fileList = e.target.files;
    let i = 0;
    const parsedFileList = []
    while (i < fileList.length) {
      let extName = fileList[i].name.split(".").slice(-1).toString();
      parsedFileList.push({ media: URL.createObjectURL(fileList[i]), extName })
      i++;
    }
    setPostImages([...postImages.concat(parsedFileList)])
  }

  const removePostImages = (image) => {
    setPostImages(postImages.filter((postImage) => image !== postImage))
  }
  return (
    <>
      <form onSubmit={onPost} className={(postText || postImages.length !== 0) ? "CreatePost focused" : "CreatePost"}>
        <Textarea
          onChange={(e) => {setPostText(e.target.value.trim())
            console.log(postText)
          }}
          icon={<TfiAnnouncement style={{ fontSize: "22px",fill:"rgb(32, 155, 240)" }} />}
          variant='unstyled'
          placeholder="What's new" size='md'
        />
        <div className={"C" + postImages.slice(0, 5).length + "_card " + 'postImagePreview '}>
          {
            postImages.length !== 0 &&
            postImages.slice(0, 5).map((image, i) =>
              <div className={"previewCard"} key={i}>
                <div onClick={() => removePostImages(image)} className='close-icon'>
                  <IoClose />
                </div>
                {
                  postImages.length > 5
                  &&
                  <div className='postCounter'>
                    <h1>+{postImages.length - 5}</h1>
                  </div>
                }

                {
                  image.extName === "mp4" ?
                    <video controls autoPlay mute src={image.media}></video>
                    : <img src={image.media} alt="" />
                }

              </div>)
          }
        </div>
        <div className='creatPostType'>
          <button className='iconContainer'>
            <input accept='video/mp4,image/*' multiple type="file" onChange={getPostImages} />
            <TfiImage />
            <p>Photo/Video</p>
          </button>
          <button className='iconContainer' >
            <TfiVideoCamera /> <p>Go live</p>
          </button>
          {
            (postText || postImages.length > 0)
            &&
            <div className='postBtnContainer'>
              <Button type={"submit"} radius={50} color={"blue"} variant='filled'>Post</Button>
            </div>
          }
        </div>
      </form>

    </>
  )
}

export default CreatePost;