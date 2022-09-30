import {useContext} from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import pic from '../../assets/userpic.jpg';
import { AppThemeContext } from '../../App';


function Navbar() {
    const {dark, setDark} = useContext(AppThemeContext);

    return (  
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon className="icon" />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        {!dark ?
                        <DarkModeOutlinedIcon className="icon theme-icon" onClick={()=> setDark(!dark)} /> :
                        <LightModeOutlinedIcon className="icon theme-icon" onClick={()=> setDark(!dark)} />
                        }
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="badge">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="badge">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src={pic} alt="" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;