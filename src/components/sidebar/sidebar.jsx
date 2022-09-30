import React from 'react';
import './sidebar.scss';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from 'react-router-dom';



function Sidebar() {
    return (  
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{textDecoration: 'none'}} >
                 <span className="logo">Q-Store</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    
                    <li>
                        <DashboardOutlinedIcon className="icon" />
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
                    <Link to='/users' style={{textDecoration: 'none'}} >
                    <li>
                        <PeopleOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>

                    <Link to='/products' style={{textDecoration: 'none'}} >
                    <li>
                        <InventoryOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    
                    <li>
                        <KitchenOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />   
                        <span>Delivery</span>
                    </li>

                    <p className="title">LINKS</p>
                    <li>
                        <AssessmentOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <MonitorHeartOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsSharpIcon className='icon' />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;