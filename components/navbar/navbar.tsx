import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navlink from "./navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
