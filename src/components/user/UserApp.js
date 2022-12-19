import '../../styles/users/styles.css'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { useState, useEffect } from 'react'

const UserApp = () => {
  const [theme, setTheme] = useState(false);
  const [presentTheme, setPresentTheme] = useState("");

  useEffect(() => {
    checkTheme()
    }, [theme])
  const checkTheme = () =>{
    return  theme ? setPresentTheme("dark") : setPresentTheme("light")
  }
  return (
    <MantineProvider
      theme={{ colorScheme: presentTheme}}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="userApp" data-theme={presentTheme}>
        <SideBar theme={theme} presentTheme={presentTheme} setTheme={setTheme} />
        <div className='appContainer'>
          <Outlet />
        </div>
      </div>
    </MantineProvider>
  )
}

export default UserApp