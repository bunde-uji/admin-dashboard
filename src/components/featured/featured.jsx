import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Featured() {
    return (  
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featured-chart">
                    <CircularProgressbar value='85' text='85%' />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$380</p>
                <p className="desc">Previous transactions processing. Last payments may not be included</p>

                <div className="summary">
                    <div className="item">
                        <div className="item-title">Target</div>
                        <div className="item-result positive">
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className="result-amount">$15.2k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Last Week</div>
                        <div className="item-result positive">
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className="result-amount">$15.2k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Last Month</div>
                        <div className="item-result negative">
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className="result-amount">$15.2k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;