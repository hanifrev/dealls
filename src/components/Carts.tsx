import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetCartsQuery } from "@/app/services/api";
import Link from "next/link";

const Carts = () => {
  // @ts-ignore
  const { data, isLoading } = useGetCartsQuery();
  // console.log(data.carts);

  const theData = data && data.carts;

  const [products, setProducts] = useState<any[] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;

  useEffect(() => {
    setProducts(theData);
  }, [theData]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const getCurrentProducts = () => {
    if (products) {
      const startIndex = currentPage * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      return products.slice(startIndex, endIndex);
    }
    return [];
  };

  return (
    <div id="products" className="pt-0  ">
      <div className="font-bold pb-5 text-lg md:text-3xl">Carts List</div>
      {isLoading ? (
        <div className="text-xl md:text-4xl py-4">LOADING...</div>
      ) : (
        <div className="the-table overflow-x-auto pb-4">
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
              {getCurrentProducts().map((x: any) => {
                return (
                  <tr
                    key={x.id}
                    className="flex flex-row items-center text-[10px] md:text-sm  table-head"
                  >
                    <td className="w-[80px] text-left ">{x.id}</td>
                    <td className="w-[200px] text-left pl-4 publicAdd">
                      {x.total}
                    </td>
                    <td className="w-[230px] text-left pl-4 flex-wrap">
                      {x.discountedTotal}
                    </td>
                    <td className="w-[200px] text-left pl-4">
                      {x.totalProducts}
                    </td>
                    <td className="w-[230px] text-left pl-4">
                      {x.totalQuantity}
                    </td>
                    <td className="w-[100px] flex justify-center text-left ">
                      <Link href={`/carts/${x.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 rounded-md w-20">
                          Detail
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {products && products.length > productsPerPage && (
        <ReactPaginate
          pageCount={Math.ceil(products.length / productsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          previousClassName={"item previous"}
          disabledClassName={"disabled-page"}
          activeClassName={"item active "}
        />
      )}
    </div>
  );
};

export default Carts;
