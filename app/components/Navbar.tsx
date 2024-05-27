import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full h-20">
      <div className="flex items-center h-full w-4/5 justify-between">
        <div>
          <Image src="/assets/logo.png" alt="logo" width={24} height={24} />
        </div>
        <div>user, noti and coins</div>
      </div>
    </div>
  );
};

export default Navbar;
