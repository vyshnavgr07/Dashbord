import React from 'react';
import TinyChart from './TinyChart';

const Card = ({ title, count, percentageChange, data }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col p-4 ">
      <div className="flex flex-col sm:flex-row items-start justify-between flex-1">
        <div className="flex-1 w-full sm:w-1/2 p-4">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <p className="text-3xl font-bold text-gray-800 mt-1">{count}</p>
          <div className={`text-sm font-medium ${percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {percentageChange >= 0 ? '+' : ''}{percentageChange}%
          </div>
        </div>
        <div className="flex-shrink-0 w-full sm:w-1/2 h-24 sm:h-20 mt-4 sm:mt-0 overflow-hidden ">
          <TinyChart chartData={data} />
        </div>
      </div>
    </div>
  );
};

export default Card;
