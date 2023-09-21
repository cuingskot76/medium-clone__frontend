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
import axios from "axios";
import { PostTrendingProps } from "@/types";
import StarIcon from "../icons/StarIcon";

const myFontBold = localFont({
  src: "../../app/sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../app/sohne-superBold.otf",
});

const getPostTrending = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts/trending`,
    { withCredentials: true }
  );

  return data;
};

const Trending = async () => {
  const datas = await getPostTrending();

  //   get read time of post
  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    // remove all the spaces
    const wordCount = content.trim().split(/\s+/g).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };

  //   get post time published
  // e.g. Sep 10
  const getPostDate = (date: string) => {
    const time = new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
    });

    return time;
  };

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
          {datas?.posts?.map((post: PostTrendingProps, i: number) => (
            <div key={post.id}>
              <div className="flex gap-4 mb-6">
                <span
                  className={`text-[#f2f2f2] text-3xl ${myFontBold.className}`}
                >
                  0{i + 1}
                </span>

                <div>
                  <div className="flex mb-2 gap-2 items-center">
                    <Link href={"/"}>
                      <Avatar className="w-6 h-6">
                        <AvatarImage
                          src={post.user.image}
                          alt={post.user.name}
                          width={100}
                          height={100}
                        />
                        <Skeleton className="h-6 w-6 rounded-full bg-slate-300" />
                      </Avatar>
                    </Link>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Link href={"/"} className="text-sm">
                          {post.user.name}
                        </Link>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={post.user.image}
                              alt={post.user.name}
                              width={100}
                              height={100}
                            />
                            <Skeleton className="h-10 w-10 rounded-full bg-slate-300" />
                          </Avatar>
                          <span className={`text-base ${myFontBold.className}`}>
                            {post.user.name}
                          </span>
                        </div>
                        <p className="text-sm line-clamp-4 mt-2">
                          {/* {trending.descriptionAuthor} */}
                        </p>
                        <div className="flex justify-between items-center border-t mt-2 pt-2 border-[#f2f2f2]">
                          {/* <span className="text-muted">
                            {`${
                              Number(trending.authorFollowers) > 2
                                ? `${trending.authorFollowers} followers`
                                : `${trending.authorFollowers} follower`
                            }`}
                          </span> */}
                          <Button className="bg-[#1a8917] text-white rounded-full hover:bg-[#156912] w-fit">
                            Follow
                          </Button>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <Link
                    href={`trending/${post.title.replace(/\s+/g, "-")}-${
                      post.id
                    }`}
                    className={`mb-2 ${myFontSuperBold.className} line-clamp-2`}
                  >
                    {post.title}
                  </Link>
                  <div className="flex text-sm gap-2 items-center text-[#6b6b6b]">
                    <span>{getPostDate(post.created_at)}</span>
                    <span className={`${myFontBold.className} text-xl`}>·</span>
                    <span>{`${getReadTime(post.content)} min read`}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-pointer">
                            {post.premium && <StarIcon />}
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
