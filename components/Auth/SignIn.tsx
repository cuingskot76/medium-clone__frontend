"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Link from "next/link";

import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/twitter.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { axiosErrorHandling } from "@/utils/errorHandling";

const myFont = localFont({
  src: "../../app/super.otf",
});

const myFont2 = localFont({
  src: "../../app/sohne-bold.otf",
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

const SignIn = ({ setIsLogin, setIsRegister }: any) => {
  return (
    <section
      className=" fixed z-50 top-0 right-0 left-0 bottom-0 transparent-bg overflow-hidden h-screen m-auto md:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          setIsLogin(false);
        } else {
          setIsLogin(true);
        }
      }}
    >
      <div className="h-screen w-full items-center flex md:max-w-xl lg:h-fit bg-white shadow-lg py-11 px-14 m-auto">
        <div>
          <p className={`text-3xl text-center ${myFont.className} mb-14`}>
            Welcome back.
          </p>

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
                <span
                  className="ml-2"
                  onClick={() => option.name === "Google" && signIn("google")}
                >
                  Sign in with {option.name}
                </span>
              </Button>
            ))}
          </div>

          <div className="text-center">
            <p className="py-10">
              No account?
              <Link
                href={"/"}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLogin(false);
                  setIsRegister(true);
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
        </div>
      </div>
    </section>
  );
};

export default SignIn;
