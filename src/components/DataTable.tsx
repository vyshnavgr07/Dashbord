'use client'
import React from 'react';

const DataTable: React.FC = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full  ">
      <table className="min-w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-sec ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">   
              <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ">
                <img
                  className="w-10 h-10 rounded-full"
                  src="data:image/jpeg;base64,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"
                  alt="Neil Sims"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
              </td>
              <td className="px-6 py-4">
                Position
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
