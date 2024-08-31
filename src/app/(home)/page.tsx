import React from "react";
import DataTable from "@/components/DataTable";
import Cards from "@/shared/cards/Card";
import Dashbord from "@/components/Dashbord";
import PiChart from '../..//shared/cards/PiChart';
import BarChart from '../../shared/BarChart';
import AttendenceChart from '../../components/AttendanceChart';

export default function Page() {
  const data = [
    { name: 'Jan', pv: 1000 },
    { name: 'Feb', pv: 2000 },
    { name: 'Mar', pv: 3000 },
    { name: 'Apr', pv: 2500 },
    { name: 'May', pv: 4000 },
    { name: 'Jun', pv: 3500 },
    { name: 'Jul', pv: 3000 },
    { name: 'Aug', pv: 2500 },
    { name: 'Sep', pv: 2000 },
    { name: 'Oct', pv: 1500 },
    { name: 'Nov', pv: 1000 },
    { name: 'Dec', pv: 500 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-7 gap-4 p-3 w-full h-screen bg-prime">
  
      <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3 border rounded-lg shadow-xl bg-[#ffe3e3]">
        <PiChart />
      </div>
     
      <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 border bg-sec shadow-xl rounded-lg overflow-hidden">
        <Cards title={"Sales"} count={2000} percentageChange={5.6} data={data} />
      </div>
    
      <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 border shadow-xl bg-sec rounded-lg overflow-hidden">
        <Cards title={"Users"} count={2000} percentageChange={5.6} data={data} />
      </div>
   
      <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-3 border bg-sec shadow-xl rounded-lg overflow-hidden h-full">
        <Dashbord />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-4 border shadow-xl bg-sec rounded-lg overflow-y-auto hide-scrollbar">
        <DataTable />
      </div>
  
      <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 border shadow-xl rounded-lg bg-sec overflow-y-scroll hide-scrollbar">
        <AttendenceChart />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 p-6 border shadow-xl rounded-lg bg-sec overflow-y-scroll hide-scrollbar">
        <BarChart />
      </div>
    </div>
  );
}
