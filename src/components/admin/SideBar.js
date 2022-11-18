import React from 'react'
import {Link as A,useLocation} from 'react-router-dom'
import TopBar from './TopBar'

const SideBar = () => {
    const location = useLocation()
  return (
    <div className='sideBar'>
        <menu>
            <ul>
                <li><A className={location.pathname==='/admin'?'active':''} to={'/admin'}><span>Overview</span></A></li>
                <li><A  className={location.pathname==='/admin/users'?'active':''} to={'/admin/users'}><span>User</span></A></li>
                <li><A  className={location.pathname==='/admin/settings'?'active':''} to={'/admin/settings'}><span>Settings</span></A></li>
            </ul>
            <TopBar />
        </menu>
    </div>
  )
}

export default SideBar