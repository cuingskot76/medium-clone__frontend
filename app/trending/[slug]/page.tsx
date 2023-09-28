import Bookmark from "@/components/icons/Bookmark";
import ClapIcon from "@/components/icons/ClapIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import PlayIcon from "@/components/icons/PlayIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import StarIcon from "@/components/icons/StarIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { PostProps } from "@/types";
import { getReadTime, getTimeAgo } from "@/utils";
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

const getPost = async (postId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/post/${postId}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const post = await res.json();
  return post;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const postTitleUpperCase = decodeURIComponent(
    params.slug.split("-").slice(0, -1).join(" ")
  );

  const postId = decodeURIComponent(params.slug).split("-").slice(-1).join("");

  const post: PostProps = await getPost(postId);

  return (
    <section className="px-6 md:max-w-2xl md:px-0 mx-auto">
      <div className={`${post?.premium ? "mt-8 mb-4 " : "mt-10"}`}>
        {post?.premium && (
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
        {postTitleUpperCase}
      </h1>
      <div className=" flex gap-3">
        {post?.user && (
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={`/user/@${post.user.name.replace(/\s+/g, "-")}`}>
                  <Avatar className="w-14 h-14 ">
                    <AvatarImage
                      src={post?.user.image}
                      alt={post?.user.name}
                      className="opacity-80 hover:opacity-100"
                    />
                    <AvatarFallback>
                      <Skeleton className="h-14 w-14 rounded-full bg-slate-300" />
                    </AvatarFallback>
                  </Avatar>
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
                <p className="text-sm line-clamp-4 mt-2">{post.user.bio}</p>
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
          </div>
        )}

        {post?.user && post?.content && (
          <div>
            <div className=" flex flex-row items-center gap-2">
              <Link href={`/user/@${post.user.name.replace(/\s+/g, "-")}`}>
                {post?.user.name}
              </Link>
              <span className={`text-xl`}>·</span>
              <Link
                href={"/"}
                className="text-[#1a8917] hover:text-[#156912] text-sm"
              >
                Follow
              </Link>
            </div>

            <div className=" flex items-center gap-2">
              <span className="text-[#6B6B6B] text-sm">
                {getReadTime(post?.content)} min read
              </span>
              <span className={`text-xl`}>·</span>
              <span className="text-[#6B6B6B] text-sm">
                {getTimeAgo(post?.created_at)}
              </span>
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
              <span>{post.like?.length}</span>
            </span>
            <span className="flex items-center gap-1 text-sm text-[#6B6B6B]">
              <MessageIcon />
              <span>{post.comment?.length}</span>
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
        {post.imageBanner && (
          <Image
            src={post?.imageBanner}
            alt={post?.title}
            width={1000}
            height={500}
            className="h-full w-full object-cover"
          />
        )}
      </figure>
      <p
        className={`${myFontSerif.className} text-lg md:text-xl text-[#242424]`}
      >
        {post?.content}
      </p>
    </section>
  );
};

export default Page;
