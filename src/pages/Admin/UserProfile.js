import { Tabs, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { BsTrash } from "react-icons/bs";
import { BiBell, BiBlock, BiMailSend } from "react-icons/bi";
import userImg from "../../static/images/lolita.jpg";
import DataTable from "react-data-table-component";

const UserProfile = () => {
    const tableColumns = [
        {
            name: "Item",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Ammount",
            selector: (row) => row.year,
            sortable: true,
        },

        {
            name: "Date",
            selector: (row) => row.year,
            sortable: true,
        },
    ];
    const data = [];
    return (
        <>
            <Modal
                opened={false}
                centered
                title={<h2 className={"modalTitle"}>Send a mail to lufy</h2>}
                data-theme="dark"
            >
                <form className="modalForm">
                    <TextInput label={"Mail heading"} />
                    <Textarea label={"Mail body"} />
                    <Button>Send</Button>
                </form>
            </Modal>
            <h2 className="heading">Customer</h2>

            <div className="customerAccount">
                <div className="customerProfile">
                    <div className="customerDetails">
                        <img src={userImg} alt="" />
                        <div>
                            <h2>Lufy the Monkey</h2>
                            <p>lufythemonkey@gmail.com</p>
                            <div className="records">
                                <p>
                                    <span>0 transactions, </span>
                                    <span>1 report</span>
                                </p>
                            </div>
                            <div className="gapBtnTwo">
                                <Button
                                    leftIcon={<BiMailSend />}
                                    size={"xs"}
                                    variant="outline"
                                >
                                    Send mail
                                </Button>
                                <Button
                                    leftIcon={<BiBell />}
                                    size={"xs"}
                                    variant="outline"
                                >
                                    Send notification
                                </Button>
                                <Button
                                    leftIcon={<BiBlock />}
                                    size={"xs"}
                                    variant="outline"
                                >
                                    Block
                                </Button>
                                <Button
                                    leftIcon={<BsTrash />}
                                    size={"xs"}
                                    color="red"
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs defaultValue="customer-transaction">
                    <Tabs.List position={"left"}>
                        <Tabs.Tab value="customer-transaction">
                            <h3>Transactions</h3>
                        </Tabs.Tab>
                        <Tabs.Tab value="customer-report">
                            <h3>Report</h3>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="customer-transaction" pt="xs">
                        <div className="tabContainer">
                            <h2>Transaction</h2>
                            <div className="main">
                                <DataTable
                                    columns={tableColumns}
                                    data={data}
                                    pagination
                                    noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    highlightOnHover
                                />
                            </div>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="customer-report" pt="xs">
                        <div className="tabContainer">
                            <h2>Reports</h2>
                            <div className="userReportContainer">
                                <div className="reportBox userReport">
                                    <p>I have some issue with payment</p>
                                    <div className="reportDetails">
                                        <h5>22 feb,2015</h5>
                                    </div>
                                </div>
                                <div className="reportBox adminReply">
                                    <p>Sorry about that it will be fixed</p>
                                    <div className="reportDetails">
                                        <h5>22 feb,2015</h5>
                                        <p>Replied by John Smith</p>
                                    </div>
                                </div>
                                <div className="reportBox userReport">
                                    <p>I have some issue with payment</p>
                                    <div className="reportDetails">
                                        <h5>22 feb,2015</h5>
                                    </div>
                                </div>
                                <div className="reportBox adminReply">
                                    <p>Sorry about that it will be fixed</p>
                                    <div className="reportDetails">
                                        <h5>22 feb,2015</h5>
                                        <p>Replied by John Smith</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </>
    );
};

export default UserProfile;
