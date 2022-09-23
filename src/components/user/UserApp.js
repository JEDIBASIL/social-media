import '../../styles/users/styles.css'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { useState } from 'react'

const UserApp = () => {
  const [theme,setTheme] = useState("dark");
  return (
    <MantineProvider
    theme={{ colorScheme: theme}}
    withGlobalStyles
    withNormalizeCSS
>
    <div className="userApp" data-theme={theme}>
        <SideBar/>
        <div className='appContainer'>
            <Outlet />
        </div>
    </div>
    </MantineProvider>
  )
}

export default UserApp