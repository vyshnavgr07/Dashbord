import React from "react";
import DataTable from "@/components/DataTable";
export default function page() {
  return (
    <div className="grid grid-cols-6 grid-rows-7 gap-4 bg-fuchsia-200 p-3 w-full h-screen ">
      <div className="col-span-2 row-span-3 col-start-1 row-start-5   p-6 border border-black rounded-lg">
        9
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-3   p-6 border border-black rounded-lg">
        10
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-1   p-6 border border-black rounded-lg">
        11
      </div>
      <div className="col-span-4 row-span-3 col-start-3 row-start-1  p-6 border  border-black rounded-lg">
        12
      </div>
      <div className="col-span-2 row-span-4 col-start-3 row-start-4   border border-black rounded-lg overflow-y-auto  hide-scrollbar">
        <DataTable />
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-4   p-6 border border-black rounded-lg">
        14
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-6   p-6 border border-black rounded-lg">
        15
      </div>
    </div>
  );
}
