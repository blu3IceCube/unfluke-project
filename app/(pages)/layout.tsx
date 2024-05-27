"use client";
import dynamic from "next/dynamic";

import React from "react";
import Navbar from "../components/Navbar";

const Breadcrumbs = dynamic(() => import("../components/Breadcrumbs"), {
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      {children}
    </>
  );
};

export default Layout;
