'use client';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
];

const BarChartComponent = () => {
  return (
    <div className="w-full h-full">
      <h2 className="text-center text-xl mb-2">Monthly Sales</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <Bar dataKey="uv" fill="#000000">
            <LabelList dataKey="name" position="insideBottom" offset={10} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
