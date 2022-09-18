import DataTable from "react-data-table-component";
import { Chip,Input} from "@mantine/core";
import {FiSearch} from 'react-icons/fi'

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
                    <h2 className="heading">Users</h2>

        <div className='users'>
            <div className='userSortingContainer'>
            <Chip.Group >
                <Chip color={'teal'} value="all-users">All</Chip>
                <Chip value="recent-users">Recent</Chip>
                <Chip value="active-users">Active</Chip>
                <Chip value="unactive-users">Unactive</Chip>
                <Chip value="blocked-users">Blocked</Chip>
                <Chip value="vue">Vue</Chip>
            </Chip.Group>
            </div>
            <div className="userTable">
                <Input icon={<FiSearch/>} placeholder="Search user" radius={50} />
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
            </div>
        </>
    );
};

export default Users;
