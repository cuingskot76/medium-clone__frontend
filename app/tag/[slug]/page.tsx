import Bookmark from "@/components/icons/Bookmark";
import ClapIcon from "@/components/icons/ClapIcon";
import CompasIcon from "@/components/icons/CompasIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import MinIcon from "@/components/icons/MinIcon";
import StarIcon from "@/components/icons/StarIcon";
import TripleDotIcon from "@/components/icons/TripleDotIcon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { allTags } from "@/constants";
import axios from "axios";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

const getPostByTag = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tag/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Tag = async ({ params }: any) => {
  const { slug } = params;

  const title = decodeURIComponent(slug)
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const data = await getPostByTag(slug);

  //   only get first two post to display in the large card(main card)
  const firstTwoPost = data?.slice(0, 2);

  //   get read time of post
  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    // remove all the spaces
    const wordCount = content.trim().split(/\s+/g).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };

  //   get post time published
  const getTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const date = new Date(timestamp);
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  return (
    <section>
      <div className="border-b border-[#F2F2F2]">
        <div className="px-6 max-w-6xl mt-10 pb-12 mx-auto flex flex-col w-fit text-center">
          <h2 className={`text-2xl ${myFontBold.className}`}>{title}</h2>
          <div className="mt-3 mb-6 text-[#6B6B6B] text-sm flex items-center gap-2">
            <span>Topic</span>
            <span className={`text-xl`}>·</span>
            <span>2.5M Followers</span>
            <span className={`text-xl`}>·</span>
            <span>246K Stories</span>
          </div>
          <Button className="bg-[#191919] rounded-full w-fit mx-auto">
            Follow
          </Button>
        </div>
      </div>

      <div className="px-6 max-w-6xl mx-auto">
        <h4 className={`my-10 ${myFontBold.className} text-xl`}>
          Recommended stories
        </h4>
        <div className="flex flex-col gap-8 ">
          {firstTwoPost?.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-col  border-b border-[#F2F2F2] pb-7"
            >
              <div className="max-h-fit w-full bg-slate-200 overflow-hidden rounded-sm">
                <Image
                  //   src={post.image}
                  //   src={"https://github.com/shadcn.png"}
                  src={
                    "https://miro.medium.com/v2/resize:fit:679/1*NskIlAAM5A1U7uqGgxC6Lg.jpeg"
                  }
                  width={1000}
                  height={1000}
                  alt={post.title}
                  className="w-full h-full object-cover aspect-w-2 aspect-h-2"
                />
              </div>
              <div className="flex gap-2 mt-6">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={post.title}
                    width={100}
                    height={100}
                  />
                  <Skeleton className="h-6 w-6 rounded-full bg-slate-300" />
                </Avatar>
                <span>{post.author.username}</span>
              </div>
              <div className="mt-4">
                <p className={`${myFontBold.className} line-clamp-2 text-xl`}>
                  {post.title}
                </p>
                <p className="text-[#6B6B6B] text-base mt-2 line-clamp-2">
                  {post.subTitle}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mt-4">
                {post.isPremium && <StarIcon />}
                <span>{getReadTime(post.content)} min read</span>
                <span className={`text-xl`}>·</span>
                <span>{getTimeAgo(post.createdAt)}</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-5">
                  <span className="flex items-center gap-1 text-sm text-[#6B6B6B]">
                    <ClapIcon />
                    <span>{123}</span>
                  </span>
                  <span className="flex items-center gap-1 text-sm text-[#6B6B6B]">
                    <MessageIcon />
                    <span>{123}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <Bookmark />
                  <TripleDotIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tag;
