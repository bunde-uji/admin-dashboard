import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


function Widget({ type }) {
    let data;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlineOutlinedIcon 
                    className='icon' 
                    style={{color: 'crimson', backgroundColor: 'pink'}}
                />
            }
            break;
        
            case "order":
                data = {
                    title: 'ORDERS',
                    isMoney: false,
                    link: 'View all orders',
                    icon: <ShoppingCartOutlinedIcon
                        className='icon' 
                        style={{color: '#cca300', backgroundColor: '#fff0b3'}}
                    />
                }
                break;

                case "earning":
                    data = {
                        title: 'EARNINGS',
                        isMoney: true,
                        link: 'View net earnings',
                        icon: <MonetizationOnOutlinedIcon 
                            className='icon' 
                            style={{color: '#008000', backgroundColor: '#b3ffb3'}}
                        />
                    }
                    break;

                    case "balance":
                        data = {
                            title: 'BALANCE',
                            isMoney: true,
                            link: 'See details',
                            icon: <AccountBalanceWalletOutlinedIcon 
                                className='icon' 
                                style={{color:'#3d0099', backgroundColor: '#d1b3ff'}}
                            />
                        }
                        break;
    
        default:
            break;
    }

    console.log(data);

    return (  
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;