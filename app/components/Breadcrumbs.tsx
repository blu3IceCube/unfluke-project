"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoHome } from "react-icons/go";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <nav className="py-3 rounded-md w-full mb-4 mt-[50px]">
      <ol className="list-reset flex text-grey-dark">
        <li className="text-[22px]">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            <GoHome />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={to} className="text-gray-500 text-[22px]">
              <span className="mx-2">/</span>
              {value}
            </li>
          ) : (
            <li key={to} className="text-[22px]">
              <span className="mx-2">/</span>
              <Link href={to} className="text-blue-600 hover:text-blue-700">
                {value}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
