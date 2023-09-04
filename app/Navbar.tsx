import React from "react";
import Image from "next/image";

import MediumLogo from "../public/images/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="bg-yellow max-w-screen-xl px-7 md:px-12 m-auto">
      <div className="flex justify-between items-center">
        <Image src={MediumLogo} alt="Medium Logo" width={200} height={200} />

        <nav className="hidden sm:flex justify-between items-center py-4">
          <Link href="/">Our story</Link>
          <Link href="/">Membership</Link>
          <Link href="/">Write</Link>
          <Link href="/">Sign In</Link>
        </nav>

        <nav className="sm:hidden">
          <Link href="/">Sign In</Link>
          <Link href="/">Get started</Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
