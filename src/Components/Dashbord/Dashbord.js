import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const [chartData,setChartData] =useState([])
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
        .then(res => res.json())
        .then(data => setChartData(data))
    },[])
    return (
        <div>
            <LineChart width={730} height={250} data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default Dashbord;