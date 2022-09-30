import React from 'react';
import './single.scss';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Chart from '../../components/chart/chart';
import BasicTable from '../../components/table/table';


function Single() {
    return (  
        <div className='single'>
            <Sidebar />
            <div className="single-container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className='edit-btn'>Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="item-image" />

                            <div className="details">
                                <h1 className="item-title">Eniola Scholes</h1>
                                <div className="detail-item">
                                    <span className="item-key">Email:</span>
                                    <span className="item-value">enischoles18@gmail.com</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Phone:</span>
                                    <span className="item-value">+234 816 6473 238</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Address:</span>
                                    <span className="item-value">24 Efab Queens Estate, Gwarinpa, Abuja</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Country:</span>
                                    <span className="item-value">Nigeria</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title='User transactions (Last 6 months)' />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <BasicTable />
                </div>
            </div>
        </div>
    );
}

export default Single;