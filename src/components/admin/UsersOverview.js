import React from "react";
import {CgArrowTopRight} from 'react-icons/cg'
import {MdOutlineArrowUpward,MdOutlineArrowDownward} from 'react-icons/md'

const UsersOverview = () => {
    return (
        <div className="usersOverview">
            <div className="usersOverviewContainer">
                <div className="card">
                    <h3>Total users</h3>
                    <div className='status'>
                        <h1>300</h1>
                        <div  style={{color:'lightgreen'}} className='statistics'>
                            <MdOutlineArrowUpward/>
                            <p>+10 users</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                <h3>Today's new users</h3>
                    <div className='status'>
                        <h1>5</h1>
                    </div>
                </div>
                <div className="card">
                <h3>Monthly new users</h3>
                    <div className='status'>
                        <h1>80</h1>
                    </div>
                </div>
                <div className="card">
                <h3>Active users</h3>
                    <div className='status'>
                        <h1>280</h1>
                        <div style={{color:'crimson'}} className='statistics'>
                            <MdOutlineArrowDownward/>
                            <p>-10 unactive users</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                <h3>Unactive users</h3>
                    <div className='status'>
                        <h1>20</h1>
                    </div>
                </div>
                <div className="card">
                <h3>Blocked users</h3>
                    <div className='status'>
                        <h1>0</h1>
                    </div>
                </div>
                <div className="card">
                <h3>Delete users</h3>
                    <div className='status'>
                        <h1>10</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersOverview;
