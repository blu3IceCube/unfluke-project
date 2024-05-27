import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-16">
      <div className="flex items-center h-full w-4/5 justify-between border-b">
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
