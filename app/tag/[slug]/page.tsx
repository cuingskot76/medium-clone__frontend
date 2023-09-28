import Bookmark from "@/components/icons/Bookmark";
import ClapIcon from "@/components/icons/ClapIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import TripleDotIcon from "@/components/icons/TripleDotIcon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TagPostProps } from "@/types";
import { getTitleTag, getTwoMaxView } from "@/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const myFontSuperBold = localFont({
  src: "../../sohne-superBold.otf",
});
const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

const getPostByTag = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tag/${slug}`
    // {
    //   cache: "no-store",
    // }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Tag = async ({ params }: { params: { slug: string } }) => {
  const data: TagPostProps[] = await getPostByTag(params.slug);

  const getMaxTwoViews = getTwoMaxView(data[0].post);

  return (
    <section>
      <div className="border-b border-[#F2F2F2]">
        <div className="px-6 max-w-6xl mt-10 pb-12 mx-auto flex flex-col w-fit text-center">
          <h2 className={`text-2xl ${myFontBold.className} md:text-5xl`}>
            {getTitleTag(params.slug)}
          </h2>
          <div className="mt-3 mb-6 text-[#6B6B6B] text-sm md:text-base flex items-center gap-2">
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
        <h4 className={`my-10 ${myFontBold.className} text-xl md:text-2xl`}>
          Recommended stories
        </h4>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
          {getMaxTwoViews?.map((post) => (
            <div
              key={post.id}
              className="flex flex-col  border-b border-[#F2F2F2] pb-7"
            >
              <div className="max-h-fit w-full bg-slate-200 overflow-hidden rounded-sm">
                <Image
                  //   src={post.image}
                  // src={"https://github.com/shadcn.png"}
                  src={
                    "https://miro.medium.com/v2/resize:fit:679/1*NskIlAAM5A1U7uqGgxC6Lg.jpeg"
                  }
                  width={1000}
                  height={1000}
                  alt={post.title}
                  className="w-full h-48 min-[538px]:h-56 sm:h-72 object-cover aspect-[2/2]"
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
                {/* <span>{post.author.username}</span> */}
              </div>
              <div className="mt-4">
                <Link
                  href={`/post/${post.title
                    .replace(/\s+/g, "-")
                    .replace(/\?/g, "-")}${post.id}`}
                  className={`${myFontSuperBold.className} line-clamp-2 text-xl md:text-2xl`}
                >
                  {post.title}
                </Link>
                <p className="text-[#6B6B6B] text-base mt-2 line-clamp-2">
                  {post.subTitle}
                </p>
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
