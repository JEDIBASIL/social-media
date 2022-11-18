import { Autocomplete } from "@mantine/core";
import { BsSearch, BsBell } from 'react-icons/bs'
import userImg from '../../static/images/anime.jpg'
import {Link as A} from 'react-router-dom'
const TopBar = () => {
    return (
        <div className="topBar">

            <div className={'topBarSearchBar'}>

                <Autocomplete
                    radius={5}
                    icon={<BsSearch />}
                    data={['Settings']}
                    placeholder={'Search dashboard'}
                />
                <div className='adminProfile'>
                    <img src={userImg} alt="" />
                </div>
                <A to={"/admin/notifications"}>

                    <div className='topBarNotificationIcon'>
                        <BsBell />
                    </div>
                </A>

            </div>
        </div>
    );
};

export default TopBar;
