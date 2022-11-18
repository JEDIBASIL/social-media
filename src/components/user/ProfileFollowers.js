import { MdArrowBack } from 'react-icons/md';
import { Tabs, Modal } from '@mantine/core';

const ProfileFollowers = ({followersModal,setFollowersModal}) => {
    return (
        <>
            <Modal
                styles={{
                    modal: {
                        width: "600px"
                    }
                }}
                withCloseButton={false}
                transition={"slide-up"}
                opened={followersModal}
                overflow="inside"
                overlayBlur={3}
                style={{ height: "calc(100vh - 30px)" }}
                title={
                    <div
                        style={{ gap: "20px", display: "flex", justifyContent: "space-between" }}>
                        <MdArrowBack
                            onClick={() => setFollowersModal(false)}
                            className='backArrow' />
                        <h4>Emem Basil Kingsley-Umana followers</h4>
                    </div>
                }>
                <div>
                    <Tabs
                        defaultValue="followers">
                        <Tabs.List grow position={"center"}>
                            <Tabs.Tab value="mutual-followers">
                                <h4>Mutual followers</h4>
                            </Tabs.Tab>
                            <Tabs.Tab value="followers">
                                <h4>Followers</h4>
                            </Tabs.Tab>
                            <Tabs.Tab value="following">
                                <h4>Following</h4>
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="followers" pt="xs">

                        </Tabs.Panel>

                        <Tabs.Panel value="following" pt="xs"></Tabs.Panel>
                    </Tabs>
                </div>
            </Modal>
        </>
    )
}

export default ProfileFollowers