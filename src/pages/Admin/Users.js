import DataTable from "react-data-table-component";
import { Chip, Input, Tabs } from "@mantine/core";
import { FiSearch } from 'react-icons/fi'
import {HiUsers, HiMail,HiBell,HiCog} from "react-icons/hi"
import {MdOutlineSubtitles} from "react-icons/md"
const Users = () => {
    const tableColumns = [
        {
            name: "Username",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.year,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.year,
        },
        {
            name: "Sign-up date",
            selector: (row) => row.year,
            sortable: true,
        },
    ];

    return (
        <>
            <div className='users'>
                <Tabs orientation="vertical"  defaultValue="all-users">
                    <Tabs.List>
                        <Tabs.Tab icon={<HiUsers style={{fontSize:"22px"}} />}  value="all-users">
                            
                            <h3> Users</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<HiMail style={{fontSize:"22px"}} />} value="mail-notification">
                            <h3>Mail notification</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<HiBell style={{fontSize:"22px"}} />} value="app-notification">
                            <h3>App notification</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<MdOutlineSubtitles style={{fontSize:"22px"}} />} value="subscription">
                            <h3>Subscription</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<HiCog style={{fontSize:"22px"}} />} value="settings">
                            <h3>Settings</h3>
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="all-users">
                        <div className='userSortingContainer'>
                            <Chip.Group>
                                <Chip variant="filled" radius={5} value="all-users">All</Chip>
                                <Chip variant="filled" radius={5} value="recent-users">Recent</Chip>
                                <Chip variant="filled" radius={5} value="active-users">Active</Chip>
                                <Chip variant="filled" radius={5} value="unactive-users">Unactive</Chip>
                                <Chip variant="filled" radius={5} value="blocked-users">Blocked</Chip>
                                <Chip variant="filled" radius={5} value="vue">Vue</Chip>
                            </Chip.Group>
                        </div>
                        <div className="userTable">
                            <Input icon={<FiSearch />} placeholder="Search user" radius={50} />
                            <div className="main">
                                {/* <DataTableExtensions {...tableData}> */}
                                <DataTable
                                    columns={tableColumns}
                                    data={[{}]}
                                    pagination
                                    noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    highlightOnHover
                                />
                                {/* </DataTableExtensions> */}
                            </div>
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </>
    );
};

export default Users;
