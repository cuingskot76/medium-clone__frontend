"use client";

import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import Image from "next/image";
import TwitterIcon from "../icons/twitter.png";
import { signIn } from "next-auth/react";

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

const SignUp = ({ setIsRegister, setIsLogin }: any) => {
  return (
    <section
      className="absolute z-50 top-0 right-0 left-0 transparent-bg h-screen m-auto md:flex "
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          setIsRegister(false);
        } else {
          setIsRegister(true);
        }
      }}
    >
      <div className="h-screen w-full md:max-w-xl lg:h-fit bg-white shadow-lg py-11 px-14  m-auto flex items-center">
        <div>
          <p className={`text-3xl text-center ${myFont.className} mb-12`}>
            Join Medium.
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
                  Sign up with {option.name}
                </span>
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
        </div>
      </div>
    </section>
  );
};

export default SignUp;
