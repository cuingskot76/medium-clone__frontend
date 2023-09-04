"use client";

import React, { useState } from "react";
import Image from "next/image";
import MediumLogo from "../public/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/SignIn";

const Navbar = () => {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <section className="relative bg-yellow max-w-screen-xl px-7 md:px-12 m-auto border-b border-dark">
      <div className="flex justify-between items-center h-20">
        <Image src={MediumLogo} alt="Medium Logo" width={160} height={160} />

        <nav className="flex items-center">
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-sm">
              Our story
            </Link>
            <Link href="/" className="text-sm">
              Membership
            </Link>
            <Link href="/" className="text-sm">
              Write
            </Link>
          </div>

          <div className=" flex items-center gap-6 ml-6">
            <p
              className={`text-sm ${!isSignin && "cursor-pointer"}`}
              onClick={() => setIsSignin(true)}
            >
              Sign In
              {isSignin && <SignIn setIsSignin={setIsSignin} />}
            </p>
            <Button className="rounded-full">
              <Link href="/" className="text-sm">
                Get started
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
