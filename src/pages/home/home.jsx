import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/featured';
import Chart from '../../components/chart/chart';
import BasicTable from '../../components/table/table';


function Home() {
    return (  
        <div className='home'>
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="widgets">
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earning' />
                    <Widget type='balance' />
                </div>

                <div className='charts'>
                    <Featured />
                    <Chart aspect={2 / 1} title='Revenue (Last 6 months)' />
                </div>

                <div className="list-container">
                    <div className="list-title">Latest Transactions</div>
                    <BasicTable />
                </div>
            </div>
        </div>
    );
}

export default Home;