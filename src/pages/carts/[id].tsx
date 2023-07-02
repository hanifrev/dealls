import React from "react";
import {
  useGetOneCartsQuery,
  useGetOneUserQuery,
  useGetOneProductQuery,
} from "@/app/services/api";
import { useRouter } from "next/router";
import Link from "next/link";

const CartDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const params: any = id;

  const { data, isLoading } = useGetOneCartsQuery(params);
  const product = data && data.products;
  const productId = product && product.id;

  const userId = data && data.userId;

  const getUser: any = useGetOneUserQuery(userId);
  const username = getUser && getUser.data;

  // const getProduct: any = useGetOneProductQuery(productId);
  // console.log(productId);

  return (
    <div id="detail" className="md:flex md:flex-col md:items-center">
      <div className="text-blue-500 text-xs font-bold pb-4 w-[840px]">
        <Link href="/carts">BACK</Link>
      </div>
      <div className="font-bold pb-4 text-lg md:text-3xl">Cart {id}</div>
      <div className="card mb-4 md:mb-8 text-[10px] md:font-sm">
        <span>
          USER: {username && username.firstName} {username && username.lastName}
        </span>
        <span>Quantity: {data && data.totalQuantity}</span>
        <span>Total Items: {data && data.totalProducts}</span>
        <span>Total Amount: ${data && data.discountedTotal}</span>
      </div>
      <div id="products" className="md:flex md:flex-col md:items-center ">
        <div className="the-table overflow-x-auto pb-4 text-[10px] md:text-sm">
          <table rules="all" className="mb-1">
            <thead>
              <tr className="flex flex-row items-center text-[10px] md:text-sm table-head">
                <th className="w-[80px]  text-center flex justify-center">
                  ID
                </th>
                <th className="w-[200px] text-left pl-4">Product Name</th>
                <th className="w-[100px] text-left pl-4">Brand</th>
                <th className="w-[100px] text-left pl-4 ">Quantity</th>
                <th className="w-[80px] text-left pl-4">Price</th>
                <th className="w-[80px]  text-center flex justify-center pl-2">
                  Total
                </th>
                <th className="w-[120px]  text-center flex justify-center pl-2">
                  Discount %
                </th>
                <th className="w-[80px]  text-center flex justify-center pl-2">
                  Final Price
                </th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((x: any) => {
                  return (
                    <tr
                      key={x.id}
                      className="flex flex-row items-center text-[10px] md:text-sm  table-head"
                    >
                      <td className="w-[80px] text-left ">{x.id}</td>
                      <td className="w-[200px] text-left pl-4 publicAdd">
                        {x.title}
                      </td>
                      <td className="w-[100px] text-left pl-4 flex-wrap">
                        {/* {x.discountedTotal} */}
                      </td>
                      <td className="w-[100px] text-left  flex justify-center">
                        {x.quantity}
                      </td>
                      <td className="w-[80px] text-left flex justify-center">
                        {x.price}
                      </td>
                      <td className="w-[80px] text-left flex justify-center">
                        {x.total}
                      </td>
                      <td className="w-[120px] text-left flex justify-center">
                        {x.discountPercentage}
                      </td>
                      <td className="w-[80px] text-left flex justify-center">
                        ${x.discountedPrice}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
