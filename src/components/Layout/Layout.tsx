import React, { useState } from "react";
import NavButton from "../NavButton";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [btn1Active, setBtn1Active] = useState<boolean>(true);
  const [btn2Active, setBtn2Active] = useState<boolean>(false);

  return (
    <div className="flex md:flex-row">
      {/* Mobile Navbar */}
      <nav className="md:hidden bg-purple-900 w-full fixed top-0 z-10 px-4 py-2 ">
        {/* <button>Products</button>
        <button>Carts</button> */}
        <NavButton />
      </nav>

      {/* Desktop and Tablet Sidebar */}
      <aside className="hidden md:flex bg-purple-900 w-48 h-screen px-4 py-4 flex-col items-start gap-4">
        {/* <button
          onClick={() => {
            setBtn1Active(true);
            setBtn2Active(false);
          }}
          className={`${
            btn1Active ? "text-yellow-400 font-bold" : "text-white"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => {
            setBtn1Active(false);
            setBtn2Active(true);
          }}
          className={`${
            btn2Active ? "text-yellow-400 font-bold" : "text-white"
          }`}
        >
          Carts
        </button> */}
        <NavButton />
      </aside>

      {/* Main Content */}
      <main className="w-full ml-0 lg:ml-0 pt-12 px-4 md:p-4 lg:flex lg:justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
