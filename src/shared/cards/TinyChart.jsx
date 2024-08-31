'use client';
import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const TinyChart = ({ chartData }) => {
  return (
    <div className="w-full h-full rounded-md  ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="pv" stroke="green" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TinyChart;
