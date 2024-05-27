import Image from "next/image";
import Link from "next/link";
import React from "react";

const navlinks = [
  {
    title: "Leaderboard",
    link: "/leaderboard",
  },
  {
    title: "Historical Trading",
    link: "/",
  },
  {
    title: "Historical Chart",
    link: "/",
  },
  {
    title: "Scanners",
    link: "/scanners",
  },
  {
    title: "Alerts",
    link: "/",
  },
  {
    title: "Basic Backtest",
    link: "/",
  },
  {
    title: "Advanced Backtest",
    link: "/",
  },
  {
    title: "Pricing",
    link: "/",
  },
  {
    title: "My Earnings",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center w-[91%] justify-between border-b pb-1.5">
        <div>
          <div>
            <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
          </div>
          <div>user, noti and coins</div>
        </div>
        <div className="flex items-center justify-between">
          {navlinks.map((item) => (
            <Link href={item.link}>
              <span className="font-medium font-lg">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
