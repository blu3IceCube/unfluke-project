import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center w-full">
        <section className="flex flex-col items-center w-[91%] justify-center">
          <Breadcrumbs />
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
