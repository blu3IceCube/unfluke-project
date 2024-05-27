import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center w-[91%] justify-between border-b pb-1.5">
        <div>
          <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
        </div>
        <div>user, noti and coins</div>
      </div>
      <div>nav links</div>
    </div>
  );
};

export default Navbar;
