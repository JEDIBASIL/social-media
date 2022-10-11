import React from 'react'
import {Link as A,useLocation} from 'react-router-dom'
import {BsGridFill,BsPeopleFill,BsGearFill,BsBellFill} from 'react-icons/bs'

const SideBar = () => {
    const location = useLocation()
  return (
    <div className='sideBar'>
        <menu>
            <ul>
                <li><A className={location.pathname==='/admin'?'active':''} to={'/admin'}><BsGridFill/><span>Overview</span></A></li>
                <li><A  className={location.pathname==='/admin/users'?'active':''} to={'/admin/users'}><BsPeopleFill/><span>User</span></A></li>
                <li><A className={location.pathname==='/admin/notifications'?'active':''} to={'/admin/notifications'}><BsBellFill/><span>Notifications</span></A></li>
                <li><A  className={location.pathname==='/admin/settings'?'active':''} to={'/admin/settings'}><BsGearFill/><span>Settings</span></A></li>
            </ul>
        </menu>
    </div>
  )
}

export default SideBar