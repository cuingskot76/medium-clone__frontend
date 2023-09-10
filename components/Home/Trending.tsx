import React from "react";
import ChartUp from "../icons/ChartUp";
import localFont from "next/font/local";

import Image from "next/image";
import { dummyTrendings } from "../../constants/index";

const myFontBold = localFont({
  src: "../../app/sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../app/sohne-superBold.otf",
});

const Trending = () => {
  return (
    <section className="border-b border-[#f2f2f2]">
      <div className="px-7 md:px-12 max-w-screen-xl m-auto pt-10 pb-4">
        <div className="flex items-center mb-4">
          <ChartUp />
          <h3 className={`text-base text-dark ${myFontBold.className} ml-3`}>
            Trending on Medium
          </h3>
        </div>

        <div className="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dummyTrendings.map((trending, index) => (
            <div key={trending.title}>
              <div className="flex gap-4 mb-6">
                <span
                  className={`text-[#f2f2f2] text-3xl ${myFontBold.className}`}
                >
                  0{index + 1}
                </span>

                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="bg-sky-200 rounded-full w-[24px] h-[24px] overflow-hidden p-1">
                      <Image
                        src={trending.image}
                        alt={trending.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <span className="text-sm">{trending.author}</span>
                  </div>
                  <h2 className={`mb-2 ${myFontSuperBold.className}`}>
                    {trending.title}
                  </h2>
                  <div className="flex text-sm gap-2 items-center text-[#6b6b6b]">
                    <span>{trending.date}</span>
                    <span className={`${myFontBold.className} text-xl`}>·</span>
                    <span>{trending.readTime}</span>
                    <span>{trending.isPremium}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
