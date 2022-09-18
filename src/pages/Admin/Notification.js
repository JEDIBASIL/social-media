import { Tabs, Menu, Button } from "@mantine/core";
import { HiDotsVertical, HiTrash } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link as A } from "react-router-dom";
const Notification = () => {
    return (
        <>
            <h2 className='heading'>Notification</h2>

            <div className="notification">
                <Tabs defaultValue="all-notification">
                    <Tabs.List position={"left"}>
                        <Tabs.Tab value="all-notification">
                            <h3>All</h3>
                        </Tabs.Tab>
                        <Tabs.Tab value="unread-notification">
                            <h3>Unread</h3>
                        </Tabs.Tab>
                        <Tabs.Tab value="users-notification">
                            <h3>Users</h3>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="all-notification" pt="xs">
                        <div className={"notificationContainer"}>
                        <h2>All notifications</h2>
                            <ul>
                                <li>
                                    <div className="notificationDetails">
                                        <img
                                            src="data:image/jpeg;base64,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"
                                            alt=""
                                        />
                                        <div className="text">
                                            <p>
                                                <A to={"/admin"}>John Doe</A>{" "}
                                                sent a report
                                            </p>
                                            <span className='time'>1 hour ago</span>
                                            <Button size={'xs'}>Reply</Button>
                                        </div>
                                    </div>
                                    <Menu shadow="md" width={200}>
                                        <Menu.Target>
                                            <button className="more">
                                                {" "}
                                                <HiDotsVertical />
                                            </button>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Item
                                                color={"blue"}
                                                icon={<CgProfile />}
                                            >
                                                View profile
                                            </Menu.Item>
                                            <Menu.Item
                                                icon={<HiTrash />}
                                                color={"red"}
                                            >
                                                Delete
                                            </Menu.Item>

                                            {/* Other items ... */}
                                        </Menu.Dropdown>
                                    </Menu>
                                </li>
                                <li>
                                    <div className="notificationDetails">
                                        <img
                                        src=""
                                            alt=""
                                        />
                                        <div className="text">
                                            <p>
                                                <A to={"/admin"}>Lufy </A>{" "}
                                                just logged in
                                            </p>
                                            <span className='time'>1 hour ago</span>
                                        </div>
                                    </div>
                                    <Menu shadow="md" width={200}>
                                        <Menu.Target>
                                            <button className="more">
                                                {" "}
                                                <HiDotsVertical />
                                            </button>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Item
                                                color={"blue"}
                                                icon={<CgProfile />}
                                            >
                                                View profile
                                            </Menu.Item>
                                            <Menu.Item
                                                icon={<HiTrash />}
                                                color={"red"}
                                            >
                                                Delete
                                            </Menu.Item>

                                            {/* Other items ... */}
                                        </Menu.Dropdown>
                                    </Menu>
                                </li>
                            
                            </ul>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="unread-notification" pt="xs">
                        unread-notification tab content
                    </Tabs.Panel>

                    <Tabs.Panel value="users-notification" pt="xs">
                        users-notification tab content
                    </Tabs.Panel>
                </Tabs>
            </div>
        </>
    );
};

export default Notification;
