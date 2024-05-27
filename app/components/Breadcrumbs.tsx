"use client";

import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-100 py-3 px-5 rounded-md w-full mb-4">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-700">Home</a>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={to} className="text-gray-500">
              <span className="mx-2">/</span>
              {value}
            </li>
          ) : (
            <li key={to}>
              <span className="mx-2">/</span>
              <Link href={to}>
                <a className="text-blue-600 hover:text-blue-700">{value}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
