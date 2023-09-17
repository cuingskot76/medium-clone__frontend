import Bookmark from "@/components/icons/Bookmark";
import ClapIcon from "@/components/icons/ClapIcon";
import LibraryIcon from "@/components/icons/LibraryIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import PlayIcon from "@/components/icons/PlayIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import StarIcon from "@/components/icons/StarIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { dummyTrendings } from "@/constants";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../sohne-superBold.otf",
});

const myFontSerif = localFont({
  src: "../../source-serif.otf",
});

const Page = ({ params }: any) => {
  const { slug } = params;
  const title = decodeURIComponent(slug.split("-").slice(0, -1).join(" "));

  const data = dummyTrendings.filter((trending) => trending.title === title)[0];

  return (
    <section className="px-6 md:max-w-2xl md:px-0 mx-auto">
      <div className={`${data?.isPremium ? "mt-8 mb-4 " : "mt-10"}`}>
        {data?.isPremium && (
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center">
                <StarIcon />
                <span className="text-sm text-[#6B6B6B] ml-1">
                  Member-only story
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="text-center flex flex-col gap-2">
                <h4 className={`${myFontBold.className}`}>Member-only story</h4>
                <p className="text-sm text-[#6B6B6B]">
                  Become a Medium member to enjoy unlimited access and directly
                  support the writers you read most.
                </p>
                <Button className="bg-[#1a8917] text-white rounded-full hover:bg-[#156912] mt-4 w-fit mx-auto">
                  Get unlimited access
                </Button>
                <Link
                  href={"/"}
                  className="text-[#1a8917] hover:text-[#156912] text-sm w-fit mx-auto"
                >
                  Learn more
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <h1
        className={`text-3xl md:text-5xl mt-3 ${myFontSuperBold.className} mb-6`}
      >
        {data?.title}
      </h1>

      <div className=" flex gap-3">
        {data?.image && (
          <Avatar className="w-14 h-14">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt={data?.title}
            />
            <AvatarFallback>
              <Skeleton className="h-14 w-14 rounded-full bg-slate-300" />
            </AvatarFallback>
          </Avatar>
        )}

        {data.author && data.readTime && (
          <div>
            <div className=" flex flex-row items-center gap-2">
              <h4>{data.author}</h4>
              <span className={`text-xl`}>·</span>
              <Link
                href={"/"}
                className="text-[#1a8917] hover:text-[#156912] text-sm"
              >
                Follow
              </Link>
            </div>

            <div className=" flex items-center gap-2">
              <span className="text-[#6B6B6B] text-sm">{data.readTime}</span>
              <span className={`text-xl`}>·</span>
              <span className="text-[#6B6B6B] text-sm">{data.date}</span>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex gap-2 mt-6 md:hidden">
          <Button
            variant={"outline"}
            className="border border-[#F2F2F2] rounded-full text-[#6B6B6B] text-sm gap-2 hover:bg-inherit hover:border-[#cecece]"
          >
            <PlayIcon />
            Listen
          </Button>
          <Button
            variant={"outline"}
            className="border border-[#F2F2F2] rounded-full text-[#6B6B6B] text-sm gap-2 hover:bg-inherit hover:border-[#cecece]"
          >
            <ShareIcon />
            Share
          </Button>
        </div>

        <div className="hidden md:flex justify-between md:mt-6 border-t border-b border-[#F2F2F2] pt-3 pb-3">
          <div className="flex gap-5">
            <span className="flex items-center gap-1 text-sm text-[#6B6B6B]">
              <ClapIcon />
              <span>{data.like}</span>
            </span>
            <span className="flex items-center gap-1 text-sm text-[#6B6B6B]">
              <MessageIcon />
              <span>{data.comment}</span>
            </span>
          </div>
          <div className="flex gap-6">
            <Bookmark />
            <PlayIcon />
            <ShareIcon />
          </div>
        </div>
      </div>

      <figure className="mt-10 max-h-80 overflow-hidden flex justify-center items-center object-cover">
        <Image
          src={data?.image}
          alt={data?.title}
          width={1000}
          height={500}
          className="h-full w-full object-cover"
        />
      </figure>

      <p
        className={`mt-10 ${myFontSerif.className} text-lg md:text-xl text-[#242424]`}
      >
        {data.content}
      </p>
    </section>
  );
};

export default Page;
