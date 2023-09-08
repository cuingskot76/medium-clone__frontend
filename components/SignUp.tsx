"use client";

import localFont from "next/font/local";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import Image from "next/image";
import TwitterIcon from "./icons/twitter.png";

const myFont = localFont({
  src: "../app/super.otf",
});

const myFont2 = localFont({
  src: "../app/sohne-bold.otf",
});

const sigInOptions = [
  {
    name: "Google",
    icon: <GoogleIcon />,
    handleSignIn: null,
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    handleSignIn: null,
  },
  {
    name: "Twitter",
    handleSignIn: null,
  },
];

const handleSubmit = async (e: any) => {};

const SignUp = ({ setIsRegister, setIsLogin }: any) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div
      className="absolute z-50 top-0 right-0 left-0 transparent-bg h-screen m-auto md:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          setIsRegister(false);
        } else {
          setIsRegister(true);
        }
      }}
    >
      <div className="md:max-w-2xl w-full lg:h-[820px] bg-white shadow-lg py-11 px-14 h-screen m-auto">
        <section>
          <p className={`text-3xl text-center ${myFont.className} mb-12`}>
            Join Medium.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-neutral-600"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Your Username"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-600"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-600"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Your Password"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <Button className="flex w-full items-center justify-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign up
              </Button>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-neutral-600 bg-white">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center gap-3">
            {sigInOptions.map((option) => (
              <Button
                key={option.name}
                className="w-[300px] rounded-full p-2 border border-dark relative"
                variant={"ghost"}
              >
                <div className="absolute left-3">
                  {option.name === "Twitter" ? (
                    <Image
                      src={TwitterIcon}
                      alt="Twitter"
                      width={17}
                      height={17}
                    />
                  ) : (
                    option.icon
                  )}
                </div>
                <span className="ml-2">Sign up with {option.name}</span>
              </Button>
            ))}
          </div>

          <div className="text-center">
            <p className="py-10">
              Already have an account?
              <Link
                href={"/"}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRegister(false);
                  setIsLogin(true);
                }}
                className={`text-[#1A8917] ${myFont2.className}`}
              >
                {" "}
                Sign in
              </Link>
            </p>

            <p className="pt-3 text-[#6B6B6B] text-[13px]">
              Click “Sign Up” to agree to Medium’s
              <Link href={"/"} className="underline">
                {" "}
                Terms of Service{" "}
              </Link>
              and acknowledge that Medium’s
              <Link href={"/"} className="underline">
                {" "}
                Privacy Policy{" "}
              </Link>
              applies to you.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
