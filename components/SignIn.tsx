"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import Link from "next/link";

import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/twitter.png";
import Image from "next/image";

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

const SignIn = ({ setIsLogin, isLogin }: any) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/login`,
      {
        email: user.email,
        password: user.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    router.push("/dashboard");
  };

  return (
    <section>
      <p className={`text-3xl text-center ${myFont.className} mb-12`}>
        Welcome back.
      </p>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Button className="flex w-full items-center justify-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Sign in
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
                <Image src={TwitterIcon} alt="Twitter" width={17} height={17} />
              ) : (
                option.icon
              )}
            </div>
            <span className="ml-2">Sign in with {option.name}</span>
          </Button>
        ))}
      </div>

      <div className="text-center">
        <p className="py-10">
          No account?
          <Link
            href={"/"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLogin(false);
            }}
            className={`text-[#1A8917] ${myFont2.className}`}
          >
            {" "}
            Create one
          </Link>
        </p>

        <p className="text-[#6B6B6B] text-[13px]">
          Forgot email or trouble signing in?
          <Link href={"/"} className="underline">
            {" "}
            Get help.
          </Link>
        </p>

        <p className="pt-8 text-[#6B6B6B] text-[13px]">
          Click “Sign In” to agree to Medium’s
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
  );
};

export default SignIn;
