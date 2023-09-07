"use client";

import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Form = ({ setIsCard, isLogin, setIsLogin }: any) => {
  return (
    <div
      className="absolute z-50 top-0 right-0 left-0 transparent-bg h-screen m-auto md:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
          e.stopPropagation();
          setIsCard(false);
          setIsLogin(false);
        } else {
          setIsCard(true);
        }
      }}
    >
      <div className="md:max-w-2xl w-full lg:h-[820px] bg-white shadow-lg py-11 px-14 h-screen m-auto">
        {isLogin ? (
          <SignIn setIsLogin={setIsLogin} isLogin={isLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} isLogin={isLogin} />
        )}
      </div>
    </div>
  );
};

export default Form;
