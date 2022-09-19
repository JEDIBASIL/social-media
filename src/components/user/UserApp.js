import '../../styles/users/styles.css'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const UserApp = () => {
  return (
    <div className="userApp">
        <SideBar/>
        <div className='appContainer'>
            <Outlet />
        </div>
    </div>
  )
}

export default UserApp