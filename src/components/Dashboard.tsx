import React from "react";
import Products from "./Products";
import Carts from "./Carts";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { activeButton1, activeButton2 } = useSelector(
    (state: any) => state.button
  );

  return <div>{activeButton1 ? <Products /> : <Carts />}</div>;
};

export default Dashboard;
