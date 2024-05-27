import Image from "next/image";
import Link from "next/link";
import { FaCircleUser, FaBell, FaCircle, FaCaretDown } from "react-icons/fa6";

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
      <div className="flex flex-col items-center w-[91%] justify-center">
        <div className="flex items-center w-full justify-between border-b pb-1.5">
          <div>
            <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
          </div>
          <div className="flex gap-10 items-center text-lg text-orange-400">
            <span className="flex gap-1">
              <FaBell />
              <FaCaretDown />
            </span>
            <span className="flex gap-1">
              <FaCircle />
            </span>
            <span className="flex gap-1">
              <FaCircleUser />
              <FaCaretDown />
            </span>
          </div>
        </div>
        <div className="flex items-center w-full pt-3 gap-6">
          {navlinks.map((item) => (
            <Link href={item.link}>
              <span className="font-semibold font-lg">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
