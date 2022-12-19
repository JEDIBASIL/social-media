import { Button, Modal } from '@mantine/core'

const UploadPostModal = ({ accept, typeName, isMultiple, opened, setOpened, getPostMedia }) => {
    const onChange = (e)=>{
        setOpened(false)
        getPostMedia(e)
    }
    return (
        <div>
            <Modal onClose={() => setOpened(false)} title={<h2>Share {typeName}</h2>} radius={"15px"} overlayBlur={1} opened={opened}>
                <div>
                    <Button style={{ overflow: "hidden" }} className='iconContainer' mb={"15px"} variant={"outline"} fullWidth radius={"50px"}>
                        <input style={{ position: "absolute", cursor: "pointer", left: "0", width: "100%", height: "200%", opacity: 0, backgroundColor: "red" }} accept={accept} multiple={isMultiple} type="file" onChange={onChange} />
                        Select {typeName}
                    </Button>
                    <Button fullWidth radius={"50px"}>
                        {typeName.toLowerCase() =="photos"  && "Take photos"}
                        {typeName.toLowerCase() =="video"  && "Make a video"}
                        {typeName.toLowerCase() =="audio"  && "Record an audio"}
                    </Button>

                </div>
            </Modal>
        </div>
    )
}

export default UploadPostModal