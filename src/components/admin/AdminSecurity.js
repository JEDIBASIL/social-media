import { Modal, TextInput, Button } from "@mantine/core";
import { useState } from "react";
const AdminSecurity = () => {
    const [confirmationModal,setConfirmationModal] = useState(false)
    return (
        <div className="adminSecurity">
            <Modal
                className="deleteAccountModal"
                centered
                title={<h2 className="risky">Risky</h2>}
                opened={confirmationModal}
                onClose={() => { setConfirmationModal(false)}}
                data-theme="dark"
            >
                <p className="deleteAccountWarningText">
                    This is a dangerous, your details will be lost and there is
                    no going back
                </p>
                <div className="gapBtn">
                    <Button onClick={() => { setConfirmationModal(false)}}>Cancel</Button>
                    <Button color={"red"}>Delete</Button>
                </div>
            </Modal>
            <div className="changePassword">
                <h4>Change password</h4>
                <form>
                    <div className="formContent">
                        {" "}
                        <TextInput label={"Old Password"} />
                    </div>
                    <div className="formContent">
                        {" "}
                        <TextInput label={"New password"} />
                    </div>
                    <div className="formContent">
                        {" "}
                        <TextInput label={"Confirm password"} />
                    </div>
                    <div className="formContent">
                        {" "}
                        <Button>Change account password</Button>
                    </div>
                </form>
            </div>
            <div className="deleteAccount">
                <h4>Delete account</h4>
                <p>
                    Once you delete your account, there is no going back. Please
                    be certain.
                </p>
                <Button onClick={()=>{
                    setConfirmationModal(true)
                }} color={"red"}>Delete your account</Button>
            </div>
        </div>
    );
};

export default AdminSecurity;
