"use client";

import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Form = ({ setIsCard, isAuth }: any) => {
  console.log("auth", isAuth);
  return (
    <div
      className="absolute z-50 top-0 right-0 left-0 transparent-bg h-screen m-auto md:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          setIsCard(false);
        } else {
          setIsCard(true);
        }
      }}
    >
      <div className="md:max-w-2xl w-full lg:h-[820px] bg-white shadow-lg py-11 px-14 h-screen m-auto">
        {/* {isAuth ? <SignIn /> : <SignUp />} */}

        {/* {isLogin && (
          <SignIn setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
        )}
        {isRegister && (
          <SignUp setIsRegister={setIsRegister} setIsLogin={setIsLogin} />
        )} */}
      </div>
    </div>
  );
};

export default Form;
