import { Button, Textarea } from '@mantine/core'
import { useState } from 'react'
import { IoMegaphone, IoVideocam, IoImage, IoClose } from "react-icons/io5"

const CreatePost = () => {
  const [postText, setPostText] = useState("")
  const [postImages, setPostImages] = useState([])

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
      <div className={(postText || postImages.length !== 0) ? "CreatePost focused" : "CreatePost"}>
        <Textarea
          onChange={(e) => setPostText(e.target.value.trim())}
          icon={<IoMegaphone style={{ fontSize: "30px",fill:"rgb(32, 155, 240)" }} />}
          variant='unstyled'
          placeholder="What's new" size='xl'
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
            <IoImage />
            <p>Photo/Video</p>
          </button>
          <button className='iconContainer' >
            <IoVideocam /> <p>Go live</p>
          </button>
          {
            (postText || postImages.length > 0)
            &&
            <div className='postBtnContainer'>
              <Button radius={50} color={"blue"} variant='filled'>Post</Button>
            </div>
          }
        </div>
      </div>

    </>
  )
}

export default CreatePost;