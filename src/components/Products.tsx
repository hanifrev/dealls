import React, { useEffect, useState } from "react";
// import theData from "../dummy/Products.json";
import ProductFilter from "./ProductFilter";
import ReactPaginate from "react-paginate";
import DynamicChart from "./DynamicChart";
import { useGetProductsQuery } from "@/app/services/api";

const Products: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery(50);

  const theData = data && data.products;

  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<any>();
  const [filteredProducts, setFilteredProducts] = useState<any>();
  const [searchData, setSearchData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;

  useEffect(() => {
    if (theData) {
      setProducts(theData);
      setSearchData(theData);
      setFilteredProducts(theData && theData.slice(0, productsPerPage));
    }
  }, [theData]);

  //   @ts-ignore
  const categories: string[] = [
    ...new Set(products && products.map((x: any) => x.category)),
  ];

  console.log(categories);

  const defaultFilter = {
    category: "",
    minPrice: 0,
    maxPrice: 9999,
    minRating: 0,
  };

  const handleFilter = (
    category: string,
    minPrice: number,
    maxPrice: number,
    minRating: number
  ) => {
    if (!category && minPrice === 0 && maxPrice === 9999 && minRating === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product: any) =>
          (category === "" || product.category === category) &&
          product.price >= minPrice &&
          product.price <= maxPrice &&
          product.rating >= minRating
      );
      setFilteredProducts(filtered.slice(0, productsPerPage));
      setSearchData(filtered);
      setCurrentPage(0);
    }
  };

  const handlePageChange = (selectedPage: { selected: number }) => {
    const offset = selectedPage.selected * productsPerPage;
    setFilteredProducts(products.slice(offset, offset + productsPerPage));
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div id="products">
      <div className="font-bold pb-0 text-lg md:text-3xl">Products List</div>

      <details>
        <summary>
          <h1>Chart of Brand</h1>
        </summary>
        <DynamicChart />
      </details>

      <div className="pb-2 flex flex-col">
        <label className="text-[10px]">Search:</label>
        <input
          type="text"
          className="w-full md:w-64 text-black p-1 text-[10px]"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product name here..."
        />
      </div>

      <ProductFilter categories={categories} onFilter={handleFilter} />

      {isLoading ? (
        <div className="text-xl md:text-4xl py-4">LOADING...</div>
      ) : (
        <div className="the-table overflow-x-auto pb-4">
          <table rules="all" className="mb-1">
            <thead>
              <tr className="flex flex-row items-center text-[10px] md:text-sm table-head">
                <th className="w-[50px] md:w-[70px] text-center pl-2">
                  THE ID
                </th>
                <th className="w-[265px] text-left pl-4">Product Name</th>
                <th className="w-[250px] text-left pl-4">Brand</th>
                <th className="w-[100px] text-left pl-4">Price</th>
                <th className="w-[100px] text-left pl-4">Rating</th>
                <th className="w-[100px] text-left pl-4">Stock</th>
                <th className="w-[150px] text-left pl-4">Category</th>
              </tr>
            </thead>

            <tbody>
              {search.length > 0
                ? searchData &&
                  searchData
                    .filter((x: any) => {
                      if (search == "") {
                        return x;
                      } else if (
                        x.title.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return x;
                      }
                    })
                    .map((x: any) => {
                      return (
                        <tr className="flex flex-row items-center text-[10px] md:text-sm  table-head">
                          <td className="w-[50px] md:w-[70px] text-left ">
                            {x.id}
                          </td>
                          <td className="w-[265px] text-left pl-4 publicAdd">
                            {x.title}
                          </td>
                          <td className="w-[250px] text-left pl-4 flex-wrap">
                            {x.brand}
                          </td>
                          <td className="w-[100px] text-left pl-4">
                            ${x.price}
                          </td>
                          <td className="w-[100px] text-left pl-4">
                            {x.rating}
                          </td>
                          <td className="w-[100px] text-left pl-4">
                            {x.stock} pcs
                          </td>
                          <td className="w-[150px] text-left pl-4">
                            {x.category}
                          </td>
                        </tr>
                      );
                    })
                : filteredProducts &&
                  filteredProducts.map((x: any) => {
                    return (
                      <tr className="flex flex-row items-center text-[10px] md:text-sm  table-head">
                        <td className="w-[50px] md:w-[70px] text-left ">
                          {x.id}
                        </td>
                        <td className="w-[265px] text-left pl-4 publicAdd">
                          {x.title}
                        </td>
                        <td className="w-[250px] text-left pl-4 flex-wrap">
                          {x.brand}
                        </td>
                        <td className="w-[100px] text-left pl-4">${x.price}</td>
                        <td className="w-[100px] text-left pl-4">{x.rating}</td>
                        <td className="w-[100px] text-left pl-4">
                          {x.stock} pcs
                        </td>
                        <td className="w-[150px] text-left pl-4">
                          {x.category}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      )}

      {search.length > 0 ? (
        ""
      ) : (
        <ReactPaginate
          pageCount={Math.ceil(products && products.length / productsPerPage)}
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

export default Products;
