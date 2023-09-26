import React from "react";
import ChartUp from "../icons/ChartUp";
import localFont from "next/font/local";

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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { PostTrendingProps } from "@/types";
import StarIcon from "../icons/StarIcon";
import { getReadTime, getTimeAgo } from "@/utils";

const myFontBold = localFont({
  src: "../../app/sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../app/sohne-superBold.otf",
});

const getPostTrending = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts/trending`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const data = await res.json();

  return data;
};

const Trending = async () => {
  const datas = await getPostTrending();

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
          {datas?.map((post: PostTrendingProps, i: number) => (
            <div key={post.id}>
              <div className="flex gap-4 mb-6">
                <span
                  className={`text-[#f2f2f2] text-3xl ${myFontBold.className}`}
                >
                  0{i + 1}
                </span>

                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href={`/user/@${post.user.name.replace(/\s+/g, "-")}`}
                        className="text-sm flex mb-2 gap-2 items-center"
                      >
                        <Avatar className="w-6 h-6">
                          <AvatarImage
                            src={post.user.image}
                            alt={post.user.name}
                            width={100}
                            height={100}
                            className="opacity-80 hover:opacity-100"
                          />
                          <Skeleton className="h-6 w-6 rounded-full bg-slate-300" />
                        </Avatar>
                        <span>{post.user.name}</span>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <Link
                        href={`/user/@${post.user.name.replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2"
                      >
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
                      </Link>
                      <p className="text-sm line-clamp-4 mt-2">
                        {post.user.bio}
                      </p>
                      <div className="flex justify-between items-center border-t mt-2 pt-2 border-[#f2f2f2]">
                        {post.user.follower ? (
                          <>
                            {post.user.follower.length > 2 ? (
                              <span className="text-muted">{`${post.user.follower.length} followers`}</span>
                            ) : (
                              <span className="text-muted">{`${post.user.follower.length} follower`}</span>
                            )}
                            <Button className="bg-[#1a8917] text-white rounded-full hover:bg-[#156912] w-fit">
                              Follow
                            </Button>
                          </>
                        ) : (
                          <span className="text-muted">0 followers</span>
                        )}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <Link
                    href={`trending/${post.title.replace(/\s+/g, "-")}-${
                      post.id
                    }`}
                    className={`mb-2 ${myFontSuperBold.className} line-clamp-2`}
                  >
                    {post.title}
                  </Link>
                  <div className="flex text-sm gap-2 items-center text-[#6b6b6b]">
                    <span>{getTimeAgo(post.created_at)}</span>
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
