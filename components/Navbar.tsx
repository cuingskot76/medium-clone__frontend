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
import jwt_decode from "jwt-decode";
import { UserProps } from "@/types";
import ArrowUp from "./icons/ArrowUp";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import ProfileIcon from "./icons/ProfileIcon";
import LibraryIcon from "./icons/LibraryIcon";
import StoryIcon from "./icons/StoryIcon";
import StatsIcon from "./icons/StatsIcon";
import StarIcon from "./icons/StarIcon";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [scrollPos, setScrollPos] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
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

  const { data: session } = useSession();

  const decodedToken: UserProps | null = session?.user?.accessToken
    ? jwt_decode(session?.user?.accessToken)
    : null;

  return (
    <header>
      {decodedToken ? (
        <section>
          <div className="sm:hidden flex justify-center items-center cursor-pointer h-10 border-b border-[#F2F2F2]">
            <p className="mr-2 text-sm text-[#6B6B6B]">Open in app</p>
            <ArrowUp />
          </div>
          <div className="px-5 py-1 border-b border-[#F2F2F2] flex">
            <div className="gap-4 flex flex-1">
              <Link href="/">
                <Image
                  src={MediumArtboard}
                  alt="Medium Logo"
                  width={70}
                  height={70}
                />
              </Link>

              <div className="hidden sm:flex relative items-center">
                <SearchIcon className="absolute mx-3 items-center flex" />
                <input
                  type="text"
                  placeholder="Search Medium"
                  className="w-[240px] bg-[#F9F9F9] rounded-2xl py-2 pr-5 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center m-auto">
              <div className="hidden md:flex items-center gap-2 cursor-pointer">
                <PencilIcon />
                <span className="text-[#6b6b6b] text-sm">Write</span>
              </div>
              <div className="sm:hidden">
                <SearchIcon className="items-center flex" />
              </div>
              <div className="mx-8 cursor-pointer">
                <BellIcon />
              </div>
              <Popover>
                <PopoverTrigger>
                  <div className="w-full h-full flex items-center gap-2 cursor-pointer">
                    <div className="w-[32px] h-[32px] border border-[#1A8917]  rounded-full flex items-center justify-center">
                      {decodedToken && (
                        <span>{decodedToken?.username?.split("")[0]}</span>
                      )}
                    </div>
                    <ChevronDownIcon />
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="border-b border-[#F2F2F2] pb-4">
                    <Link
                      href="/"
                      className="flex items-center gap-4 py-2 px-3"
                    >
                      <ProfileIcon />
                      <span className="text-sm text-[#6B6B6B]">Profile</span>
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-4 py-2 px-3"
                    >
                      <LibraryIcon />
                      <span className="text-sm text-[#6B6B6B]">Library</span>
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-4 py-2 px-3"
                    >
                      <StoryIcon />
                      <span className="text-sm text-[#6B6B6B]">Stories</span>
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-4 py-2 px-3"
                    >
                      <StatsIcon />
                      <span className="text-sm text-[#6B6B6B]">Stats</span>
                    </Link>
                  </div>

                  <div className="pt-4 flex flex-col py-1 px-3 gap-3 border-b border-[#F2F2F2] pb-4">
                    <Link href={"/"} className="">
                      <p className="text-sm text-[#6B6B6B]">Settings</p>
                    </Link>
                    <Link href={"/"} className="">
                      <p className="text-sm text-[#6B6B6B]">
                        Refine recommendations
                      </p>
                    </Link>
                    <Link href={"/"} className="">
                      <p className="text-sm text-[#6B6B6B]">
                        Manage publications
                      </p>
                    </Link>
                    <Link href={"/"} className="">
                      <p className="text-sm text-[#6B6B6B]">Help</p>
                    </Link>
                  </div>

                  <div className="pt-4 flex flex-col gap-3 py-1 px-3 border-b border-[#F2F2F2] pb-4">
                    <Link
                      href={"/"}
                      className="flex items-center justify-between"
                    >
                      <p className="text-sm text-[#6B6B6B]">Become a member</p>
                      <span className="scale-125">
                        <StarIcon />
                      </span>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Create a Mastodon account
                      </p>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Apply for author verification
                      </p>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Apply to Partner Program
                      </p>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Gift a membership
                      </p>
                    </Link>
                  </div>

                  <div className="pt-4 flex flex-col py-1 px-3">
                    <Link
                      href={"/"}
                      onClick={() =>
                        signOut({ redirect: false, callbackUrl: "/" })
                      }
                    >
                      <p className="text-sm text-[#6B6B6B] ">Sign out</p>
                      <span className="text-sm text-[#6B6B6B]">
                        {decodedToken?.email.substring(0, 2) +
                          "*".repeat(
                            decodedToken?.email?.length!! -
                              decodedToken?.email?.indexOf("@")!! -
                              2
                          ) +
                          decodedToken?.email?.substring(
                            decodedToken?.email?.indexOf("@")!!
                          )}
                      </span>
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
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
