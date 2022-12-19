import { Button, Textarea } from '@mantine/core'
import { useState } from 'react'
import { IoClose } from "react-icons/io5"
import {TfiAnnouncement, TfiImage, TfiVideoCamera, TfiCamera, TfiMicrophone} from "react-icons/tfi";
import profileImg from "../../static/images/anime.jpg";


const CreatePost = ({posts, setPosts}) => {
  const [postText, setPostText] = useState("")
  const [postImages, setPostImages] = useState([])

  const onPost = (e) =>{
    e.preventDefault()
    setPosts([ {
      title:postText,
      image:postImages
    }, ...posts])
    setPostText("")
    setPostImages([])
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
      <form onSubmit={onPost} className={(postText.trim() || postImages.length !== 0) ? "CreatePost focused" : "CreatePost"}>
        <Textarea
        value={postText}
          onChange={(e) => setPostText(e.target.value)}
          icon={
          <div className='post_profile_image'>
            <img src={profileImg} alt="" />
            <TfiAnnouncement style={{ fontSize: "30px",fill:"rgb(32, 155, 240)" }} />
          </div>}
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
          <button type={"button"} className='iconContainer'>
            <input accept='image/*' multiple type="file" onChange={getPostImages} />
            <TfiImage />
            <p>Photo</p>
          </button>
          <button type={"button"} className='iconContainer'>
            <input accept='video/mp4' type="file" onChange={getPostImages} />
            <TfiCamera />
            <p>Video</p>
          </button>

          <button type={"button"} className='iconContainer'>
            <input accept='audio/mp3' type="file" onChange={getPostImages} />
            <TfiMicrophone />
            <p>Audio</p>
          </button>

          <button type={"button"} className='iconContainer' >
            <TfiVideoCamera /> <p>Go live</p>
          </button>

          {
            (postText.trim() || postImages.length > 0)
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