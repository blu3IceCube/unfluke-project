"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  return <div>current path: {pathname}</div>;
};

export default Breadcrumbs;
