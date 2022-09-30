import './chart.scss';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {name: 'April', total: 1200},
    {name: 'May', total: 1450},
    {name: 'June', total: 1300},
    {name: 'July', total: 2100},
    {name: 'August', total: 900},
    {name: 'September', total: 1850},
  ];

function Chart(props) {
    return (  
        <div className='chart'>
            <div className="title">{props.title}</div>
            <ResponsiveContainer width="100%" aspect={props.aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray'  />
                    <CartesianGrid strokeDasharray="3 3" className='chart-grid' stroke='rgb(231, 225, 225)' />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;