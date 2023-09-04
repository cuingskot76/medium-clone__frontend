import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/icons/GoogleIcon";

const SignIn = ({ setIsSignin }: any) => {
  return (
    <Link
      href="/"
      className="absolute top-0 right-0 left-0  bg-white opacity-95 w-full h-screen m-auto md:flex cursor-default"
      onClick={(e) => {
        e.stopPropagation();
        setIsSignin(false);
      }}
    >
      <Link
        href="/"
        className="relative md:max-w-xl lg:h-[689px] bg-white shadow-lg py-11 px-14 h-screen m-auto w-full cursor-default"
        onClick={(e) => {
          e.stopPropagation();
          setIsSignin(true);
        }}
      >
        <h2 className="text-3xl">Welcome back.</h2>
        <div>
          <Button className="rounded-full" variant={"ghost"}>
            <GoogleIcon />
            Sign in with Google
          </Button>
        </div>
      </Link>
    </Link>
  );
};

export default SignIn;
