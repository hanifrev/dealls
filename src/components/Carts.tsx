import React from "react";
import theData from "../dummy/Carts.json";

const Carts = () => {
  return (
    <div id="products">
      <div className="the-table overflow-x-auto">
        <table rules="all" className="mb-1">
          <thead>
            <tr className="flex flex-row items-center text-[10px] md:text-sm table-head">
              <th className="w-[80px]  text-center pl-2">CART ID</th>
              <th className="w-[200px] text-left pl-4">Total Items</th>
              <th className="w-[230px] text-left pl-4">
                Total Discounted Items
              </th>
              <th className="w-[200px] text-left pl-4">Total Products</th>
              <th className="w-[230px] text-left pl-4">Total Quantity</th>
              <th className="w-[100px]  text-center flex justify-center pl-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {theData &&
              theData.map((x: any) => {
                return (
                  <tr className="flex flex-row items-center text-[10px] md:text-sm  table-head">
                    <td className="w-[80px] text-left ">{x.id}</td>
                    <td className="w-[200px] text-left pl-4 publicAdd">
                      {x.title}
                    </td>
                    <td className="w-[230px] text-left pl-4 flex-wrap">
                      {x.brand}
                    </td>
                    <td className="w-[200px] text-left pl-4">{x.price}</td>
                    <td className="w-[230px] text-left pl-4">{x.rating}</td>
                    <td className="w-[100px] flex justify-center text-left ">
                      <button className="bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 rounded-md w-20">
                        Detail
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
