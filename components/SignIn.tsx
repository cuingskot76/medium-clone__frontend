"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/icons/GoogleIcon";

const SignIn = ({ setIsSignin }: any) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(user);
  };

  return (
    <div
      className="absolute top-0 right-0 left-0  bg-white opacity-95 w-full h-screen m-auto md:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          setIsSignin(false);
        } else {
          setIsSignin(true);
        }
      }}
    >
      <div className="relative md:max-w-xl lg:h-[689px] bg-white shadow-lg py-11 px-14 h-screen m-auto w-full">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-4">Sign in</h1>
          <input
            type="text"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />

          <Button type="submit" className="w-full mb-4">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
