import React from "react";
import NavButton from "../NavButton";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex md:flex-row">
      {/* Mobile  */}
      <nav className="md:hidden bg-purple-900 w-full fixed top-0 z-10 px-4 py-2 ">
        <NavButton />
      </nav>
      {/* Desktop and Tablet */}
      <aside className="hidden md:flex bg-purple-900 w-48 h-screen px-4 py-4 flex-col items-start gap-4 sticky top-0 ">
        <NavButton />
      </aside>
      <main className="w-full ml-0 lg:ml-0 pt-12 px-4 md:p-4 lg:flex lg:justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
