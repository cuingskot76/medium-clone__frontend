import React from "react";
import ChartUp from "../icons/ChartUp";
import localFont from "next/font/local";

import Image from "next/image";
import { dummyTrendings } from "../../constants/index";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

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
                  <div className="flex mb-2 gap-2 items-center">
                    <Link href={"/"}>
                      <Avatar className="w-6 h-6">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt={trending.title}
                          width={100}
                          height={100}
                        />
                        <Skeleton className="h-6 w-6 rounded-full bg-slate-300" />
                      </Avatar>
                    </Link>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Link href={"/"} className="text-sm">
                          {trending.author}
                        </Link>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt={trending.title}
                              width={100}
                              height={100}
                            />
                            <Skeleton className="h-10 w-10 rounded-full bg-slate-300" />
                          </Avatar>
                          <span className={`text-base ${myFontBold.className}`}>
                            {trending.author}
                          </span>
                        </div>
                        <p className="text-sm line-clamp-4 mt-2">
                          {trending.descriptionAuthor}
                        </p>
                        <div className="flex justify-between items-center border-t mt-2 pt-2 border-[#f2f2f2]">
                          <span className="text-muted">
                            {`${
                              Number(trending.authorFollowers) > 2
                                ? `${trending.authorFollowers} followers`
                                : `${trending.authorFollowers} follower`
                            }`}
                          </span>
                          <Button className="bg-[#1a8917] text-white rounded-full hover:bg-[#156912] w-fit">
                            Follow
                          </Button>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <Link
                    href={`trending/${trending.title.replace(/\s+/g, "-")}-${
                      trending.id
                    }`}
                    className={`mb-2 ${myFontSuperBold.className}`}
                  >
                    {trending.title}
                  </Link>
                  <div className="flex text-sm gap-2 items-center text-[#6b6b6b]">
                    <span>{trending.date}</span>
                    <span className={`${myFontBold.className} text-xl`}>·</span>
                    <span>{trending.readTime}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-pointer">
                            {trending.isPremium}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Member-only story</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
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
