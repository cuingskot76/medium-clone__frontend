"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MediumLogo from "../public/images/logo.svg";
import MediumArtboard from "../public/images/artboard.svg";
import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import BellIcon from "./icons/BellIcon";
import PencilIcon from "./icons/PencilIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [scrollPos, setScrollPos] = useState(false);

  let decodeToken = null;

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const maxScroll = currentScrollPos > 380;
    setScrollPos(maxScroll);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollPos]);

  return (
    <header>
      {decodeToken ? (
        <section className="px-6 py-1 border-b border-[#F2F2F2] flex">
          <div className="gap-4 flex flex-1">
            <Image
              src={MediumArtboard}
              alt="Medium Logo"
              width={70}
              height={70}
            />

            <div className="flex relative items-center">
              <SearchIcon className="absolute mx-3 items-center flex" />
              <input
                type="text"
                placeholder="Search Medium"
                className="w-[240px] bg-[#F9F9F9] rounded-2xl py-2 pr-5 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center m-auto">
            <div className="flex items-center gap-2 cursor-pointer">
              <PencilIcon />
              <span className="text-[#6b6b6b] text-sm">Write</span>
            </div>
            <div className="mx-8 cursor-pointer">
              <BellIcon />
            </div>
            <div className="w-full h-full flex items-center gap-2 cursor-pointer">
              <div className="w-[32px] h-[32px] bg-sky-500 rounded-full"></div>
              <ChevronDownIcon />
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`z-50 ${
            scrollPos ? "bg-white" : "bg-yellow"
          } mx-auto w-full border-b border-dark fixed top-0 left-0 right-0 h-20`}
        >
          <div className={`max-w-screen-xl  mx-auto px-7 md:px-12 m-auto`}>
            <div className="flex justify-between items-center h-20">
              <Image
                src={MediumLogo}
                alt="Medium Logo"
                width={160}
                height={160}
              />
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
                    className={`text-sm ${!isLogin && "cursor-pointer"}`}
                    onClick={() => {
                      setIsLogin(true);
                    }}
                  >
                    Sign In
                    {isLogin && (
                      <SignIn
                        setIsLogin={setIsLogin}
                        setIsRegister={setIsRegister}
                      />
                    )}
                  </p>
                  <p
                    className={`text-sm rounded-full text-start ${
                      !isRegister && "cursor-pointer"
                    } ${
                      scrollPos ? "bg-[#1A8917] hover:bg-[#1d6b1a]" : "bg-dark"
                    } px-4 py-2`}
                    onClick={() => {
                      setIsRegister(true);
                    }}
                  >
                    <span className="text-white">Get started</span>
                    {isRegister && (
                      <SignUp
                        setIsRegister={setIsRegister}
                        setIsLogin={setIsLogin}
                      />
                    )}
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </section>
      )}
    </header>
  );
};

export default Navbar;
