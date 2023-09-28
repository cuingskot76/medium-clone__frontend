import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DefaultPostBanner from "@/public/images/medium.png";
import { Button } from "@/components/ui/button";
import { getReadTime, getTimeAgo } from "@/utils";
import Bookmark from "@/components/icons/Bookmark";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PostProps } from "@/types";

const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

const UserPost = ({
  id,
  title,
  content,
  created_at,
  username,
  imageBanner,
  category: { name },
}: any) => {
  return (
    <div className="mt-5 border-b border-[#F2F2F2] pb-4">
      <span className="text-[#6B6B6B] text-sm">{getTimeAgo(created_at)}</span>
      <div className="flex justify-between gap-6">
        <Link
          href={`/user/@${username.replace(/\s+/g, "-")}/${title.replace(
            /\s+/g,
            "-"
          )}-${id}`}
        >
          <h3 className={`${myFontBold.className} mt-3 text-base line-clamp-2`}>
            {title}
          </h3>
        </Link>
        <Link
          href={`/user/@${username.replace(/\s+/g, "-")}/${title.replace(
            /\s+/g,
            "-"
          )}-${id}`}
        >
          <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-28 md:h-28 overflow-hidden flex justify-center ml-6">
            <Image
              src={imageBanner ? imageBanner : DefaultPostBanner}
              alt={title}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 items-center">
          <Button
            variant={"outline"}
            className="text-sm text-dark mr-2 bg-[#f2f2f2] p-0 m-0 rounded-full w-fit h-fit py-1 px-2 border border-[#f2f2f2]"
          >
            <Link href={`/tag/${name}`}>{name}</Link>
          </Button>
          <span className="text-sm text-[#6B6B6B]">
            {getReadTime(content)} min read
          </span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer">
                <Bookmark />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-slate-700 text-slate-100">
              <span>Bookmark story</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default UserPost;
