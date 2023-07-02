import React, { useState } from "react";
import { productBtn, cartBtn } from "@/app/features/buttonSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const NavButton = () => {
  const [btn1Active, setBtn1Active] = useState<boolean>(true);
  const [btn2Active, setBtn2Active] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="flex flex-row md:flex-col items-start gap-4">
      <button
        onClick={() => {
          setBtn1Active(true);
          setBtn2Active(false);
          // dispatch(productBtn());
          router.push("/products");
        }}
        className={`${btn1Active ? "text-yellow-400 font-bold" : "text-white"}`}
      >
        Products
      </button>
      <button
        onClick={() => {
          setBtn1Active(false);
          setBtn2Active(true);
          dispatch(cartBtn());
          router.push("/carts");
        }}
        className={`${btn2Active ? "text-yellow-400 font-bold" : "text-white"}`}
      >
        Carts
      </button>
    </div>
  );
};

export default NavButton;
