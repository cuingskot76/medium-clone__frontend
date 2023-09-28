import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { blogTags, discoverTags } from "@/constants";
import Image from "next/image";
import Bookmark from "../icons/Bookmark";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { PostProps } from "@/types";
import DefaultPostBanner from "@/public/images/medium.png";
import { getLatestPosts, getReadTime, getTimeAgo } from "@/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import StarIcon from "../icons/StarIcon";

const myFontBold = localFont({
  src: "../../app/sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../app/sohne-superBold.otf",
});

const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts`, {
    next: {
      revalidate: 0,
    },
  });

  const data = await res.json();

  return data;
};

const Blogs = async () => {
  const posts: PostProps[] = await getAllPosts();

  const latestPosts = getLatestPosts(posts);

  return (
    <section className="px-7 md:px-12 max-w-screen-xl m-auto">
      <div className="lg:flex lg:flex-row-reverse lg:gap-14">
        {/* tags */}
        <div className="py-6 lg:py-14 border-b border-[#f2f2f2]">
          <div className=" sticky top-28">
            <h3 className={`mb-4 ${myFontBold.className}`}>
              Discover more of what matters to you
            </h3>
            <div>
              {blogTags.map((tag, i) => (
                <Button
                  key={i}
                  variant={"outline"}
                  className="text-sm text-dark mr-2 bg-[#f2f2f2] py-2 px-4 border border-[#f2f2f2] rounded-full gap-2 mb-2"
                >
                  {tag.name}
                </Button>
              ))}
            </div>
            <div className="mt-3">
              <Link href="/" className="text-[#1A8917] text-sm">
                See more topics
              </Link>
            </div>
            <div className=" lg:border-t border-[#f2f2f2] lg:mt-8">
              <div className="pt-6 hidden lg:flex items-start flex-wrap">
                {discoverTags.map((tag, i) => (
                  <Link
                    key={i}
                    href="/"
                    className="text-muted text-sm mr-6 mb-2"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* blogs */}
        <div className="pt-10 lg:pt-14">
          <div>
            {latestPosts.map((post, i) => (
              <div
                key={post.title}
                className="flex mb-12 justify-between gap-5 items-center"
              >
                <div className="flex-1">
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
                    href={`/post/${post.title.replace(/\s+/g, "-")}-${post.id}`}
                  >
                    <h3
                      className={`text-base md:text-xl line-clamp-2 ${myFontSuperBold.className}`}
                    >
                      {post.title}
                    </h3>
                    <p className="hidden text-base text-muted md:line-clamp-2 pt-1">
                      {post.subTitle}
                    </p>
                  </Link>
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-[#6b6b6b]">
                        {getTimeAgo(post.created_at)}
                      </span>
                      <span>·</span>
                      <span className="text-sm text-[#6b6b6b]">
                        {getReadTime(post.content)} min read
                      </span>
                      <span className="hidden sm:block">·</span>
                      <Link
                        href={`/tag/${post.category.name.replace(/\s+/g, "-")}`}
                        className="hidden sm:block text-muted py-[2px] px-2 border border-[#f2f2f2] rounded-full bg-[#f2f2f2] text-xs"
                      >
                        {post.category.name}
                      </Link>
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
                    <Bookmark />
                  </div>
                </div>

                <Link
                  href={`/post/${post.title}-${post.id}`}
                  className="w-24 h-24 sm:w-36 sm:h-28 md:w-52 md:h-36 overflow-hidden object-cover flex justify-center"
                >
                  <Image
                    src={
                      post.imageBanner ? post.imageBanner : DefaultPostBanner
                    }
                    alt={post.title}
                    width={500}
                    height={500}
                    className="object-contain transition-all duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
