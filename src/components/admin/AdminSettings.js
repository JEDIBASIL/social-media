import { Button, Select, Tooltip } from "@mantine/core";
import { Modal, Radio, TextInput } from "@mantine/core";
import { BsTrash } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
import userImg from "../../static/images/anime.jpg";
import AdminSettingsContext from "./AdminSettingsContext";
import { useState } from "react";

const AdminSettings = () => {
    const [addAdminModal, setAddAdminModal] = useState(false);
    return (
        <div className="adminSettings">
            <Modal
                className="deleteAccountModal"
                centered
                title={<h2 className="modalTitle">Add admin</h2>}
                opened={addAdminModal}
                onClose={() => {
                    setAddAdminModal(false);
                }}
                data-theme="dark"
            >
                <form className="addAdminForm">
                    <TextInput label="Email" />
                    <div className="roleContainer">
                        <label>Roles</label>
                        <div className="roleContent">
                            <div className="roleContentRadio">
                                {" "}
                                <Radio
                                    name="role"
                                    size={"xs"}
                                    label={<h3>Admin</h3>}
                                />{" "}
                            </div>
                            <p className="modalText">
                                If you add an admin with the admin role the
                                Administrator can't edit other admin status and
                                delete users
                            </p>
                        </div>
                        <div className="roleContent">
                            <div className="roleContentRadio">
                                {" "}
                                <Radio
                                    name="role"
                                    size={"xs"}
                                    label={<h3>Super admin</h3>}
                                />{" "}
                            </div>
                            <p className="modalText">
                                If you add an admin with the admin role the
                                Administrator can edit other admin status and
                                delete users
                            </p>
                        </div>
                    </div>
                    <Button>Add admin</Button>
                </form>
            </Modal>
            <div className="addAdmin">
                <p>
                    As a super admin you can add another admin,block,delete and
                    delete
                </p>
                <Button
                    onClick={() => {
                        setAddAdminModal(true);
                    }}
                    color={"teal"}
                >
                    Add admin
                </Button>
            </div>
            <div className="admins">
                <ul>
                    <li>
                        <div className="adminDetails">
                            <img src={userImg} alt="" />
                            <div className="text">
                                <h3>John smith</h3>
                                <p>johnsmith@gmail.com</p>
                            </div>
                        </div>
                        <Select
                            style={{ backgroundColor: "whitesmoke" }}
                            defaultValue={"super-admin"}
                            data={[
                                { value: "super-admin", label: "Super admin" },
                                { value: "admin", label: "Admin" },
                            ]}
                        />
                        <div className="actions">
                            <Tooltip
                                color={"blue"}
                                position="top"
                                withArrow
                                label="Block John Smith"
                            >
                                <i className="blockAdminIcon">
                                    <BiBlock />
                                </i>
                            </Tooltip>
                            <Tooltip
                                color={"red"}
                                position="top"
                                withArrow
                                label="Delete John Smith"
                            >
                                <i className="deleteAdminIcon">
                                    <BsTrash />
                                </i>
                            </Tooltip>
                        </div>
                    </li>

                    <li>
                        <div className="adminDetails">
                            <img src={userImg} alt="" />
                            <div className="text">
                                <h3>John smith</h3>
                                <p>johnsmith@gmail.com</p>
                            </div>
                        </div>
                        <Select
                            style={{ backgroundColor: "whitesmoke" }}
                            defaultValue={"super-admin"}
                            data={[
                                { value: "super-admin", label: "Super admin" },
                                { value: "admin", label: "Admin" },
                            ]}
                        />
                        <div className="actions">
                            <Tooltip
                                color={"blue"}
                                position="top"
                                withArrow
                                label="Block John Smith"
                            >
                                <i className="blockAdminIcon">
                                    <BiBlock />
                                </i>
                            </Tooltip>
                            <Tooltip
                                color={"red"}
                                position="top"
                                withArrow
                                label="Delete John Smith"
                            >
                                <i className="deleteAdminIcon">
                                    <BsTrash />
                                </i>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div className="adminDetails">
                            <img src={userImg} alt="" />
                            <div className="text">
                                <h3>John smith</h3>
                                <p>johnsmith@gmail.com</p>
                            </div>
                        </div>
                        <Select
                            style={{ backgroundColor: "whitesmoke" }}
                            defaultValue={"super-admin"}
                            data={[
                                { value: "super-admin", label: "Super admin" },
                                { value: "admin", label: "Admin" },
                            ]}
                        />
                        <div className="actions">
                            <Tooltip
                                color={"blue"}
                                position="top"
                                withArrow
                                label="Block John Smith"
                            >
                                <i className="blockAdminIcon">
                                    <BiBlock />
                                </i>
                            </Tooltip>
                            <Tooltip
                                color={"red"}
                                position="top"
                                withArrow
                                label="Delete John Smith"
                            >
                                <i className="deleteAdminIcon">
                                    <BsTrash />
                                </i>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div className="adminDetails">
                            <img src={userImg} alt="" />
                            <div className="text">
                                <h3>John smith</h3>
                                <p>johnsmith@gmail.com</p>
                            </div>
                        </div>
                        <Select
                            style={{ backgroundColor: "whitesmoke" }}
                            defaultValue={"super-admin"}
                            data={[
                                { value: "super-admin", label: "Super admin" },
                                { value: "admin", label: "Admin" },
                            ]}
                        />
                        <div className="actions">
                            <Tooltip
                                color={"blue"}
                                position="top"
                                withArrow
                                label="Block John Smith"
                            >
                                <i className="blockAdminIcon">
                                    <BiBlock />
                                </i>
                            </Tooltip>
                            <Tooltip
                                color={"red"}
                                position="top"
                                withArrow
                                label="Delete John Smith"
                            >
                                <i className="deleteAdminIcon">
                                    <BsTrash />
                                </i>
                            </Tooltip>
                        </div>
                    </li>
                    <li>
                        <div className="adminDetails">
                            <img src={userImg} alt="" />
                            <div className="text">
                                <h3>John smith</h3>
                                <p>johnsmith@gmail.com</p>
                            </div>
                        </div>
                        <Select
                            style={{ backgroundColor: "whitesmoke" }}
                            defaultValue={"super-admin"}
                            data={[
                                { value: "super-admin", label: "Super admin" },
                                { value: "admin", label: "Admin" },
                            ]}
                        />
                        <div className="actions">
                            <Tooltip
                                color={"blue"}
                                position="top"
                                withArrow
                                label="Block John Smith"
                            >
                                <i className="blockAdminIcon">
                                    <BiBlock />
                                </i>
                            </Tooltip>
                            <Tooltip
                                color={"red"}
                                position="top"
                                withArrow
                                label="Delete John Smith"
                            >
                                <i className="deleteAdminIcon">
                                    <BsTrash />
                                </i>
                            </Tooltip>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminSettings;
