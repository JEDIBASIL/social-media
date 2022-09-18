import React from "react";
import { Table, Menu } from "@mantine/core";
import { HiDotsVertical, HiTrash } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
const RecentUsers = () => {
    const users = [
        { username: "Jogger", email: "jogger@gmail.com", date: "2022-07-01" },
    ];

    const ths = (
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Date</th>
            <th>More</th>
        </tr>
    );

    const rows = users.map((user) => (
        <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.date}</td>

            <td>
                <Menu shadow="md" width={200}>
                    <Menu.Target>
                        <button className="more">
                            {" "}
                            <HiDotsVertical />
                        </button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item color={"blue"} icon={<CgProfile />}>
                            View profile
                        </Menu.Item>
                        <Menu.Item icon={<HiTrash />} color={"red"}>
                            Delete
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </td>
        </tr>
    ));

    return (
        <>
            <div className="recentUsers">
                <h2 className='subHeading'>Recent users</h2>
                <Table captionSide="bottom" className="">
                    <thead>{ths}</thead>
                    <tbody>{rows}</tbody>
                </Table>
            </div>
        </>
    );
};

export default RecentUsers;
