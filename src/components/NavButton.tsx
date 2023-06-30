import React, { useState } from "react";
import { productBtn, cartBtn } from "@/app/features/buttonSlice";
import { useSelector, useDispatch } from "react-redux";

const NavButton = () => {
  const [btn1Active, setBtn1Active] = useState<boolean>(true);
  const [btn2Active, setBtn2Active] = useState<boolean>(false);

  const activeButton = useSelector((state: any) => state.button.activeButton);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row md:flex-col items-start gap-4">
      <button
        onClick={() => {
          setBtn1Active(true);
          setBtn2Active(false);
          dispatch(productBtn());
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
        }}
        className={`${btn2Active ? "text-yellow-400 font-bold" : "text-white"}`}
      >
        Carts
      </button>
    </div>
  );
};

export default NavButton;
