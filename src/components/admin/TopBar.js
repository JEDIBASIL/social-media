import { Autocomplete } from "@mantine/core";
import { BsSearch, BsBell } from 'react-icons/bs'
import userImg from '../../anime.jpg'
const TopBar = () => {
    return (
        <div className="topBar">
            <div className='adminProfile'>
                <img src={userImg} alt="" />
                <span>Good morning, John</span>
            </div>
            <div className="timer"></div>
            <div className={'topBarSearchBar'}>

                <Autocomplete
                    radius={50}
                    icon={<BsSearch />}
                    data={['Settings']}
                    placeholder={'Search dashboard'}
                />
                <div className='topBarNotificationIcon'><BsBell /></div>
            </div>
        </div>
    );
};

export default TopBar;
