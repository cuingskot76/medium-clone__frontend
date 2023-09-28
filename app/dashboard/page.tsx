import React from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import {
  blogTags,
  discoverTags,
  dummyBlogs,
  suggestUserFollow,
} from "@/constants";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Bookmark from "@/components/icons/Bookmark";
import MinIcon from "@/components/icons/MinIcon";
import TripleDotIcon from "@/components/icons/TripleDotIcon";
import { Button } from "@/components/ui/button";
import NavbarSuccessAuth from "@/components/NavbarSuccessAuth";

const myFontBold = localFont({
  src: "../../app/sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../app/sohne-superBold.otf",
});

const myFontSerif = localFont({
  src: "../../app/source-serif.otf",
});

const Dashboard = async () => {
  return (
    <>
      <NavbarSuccessAuth />
      <section className="max-w-screen-xl md:max-w-3xl md:mx-auto lg:max-w-screen-xl px-5 ">
        <div className="flex items-center gap-8 h-16 mt-5 border-b border-[#F2F2F2] pb-2 sticky top-0 left-0 right-0 bg-white z-10">
          <PlusIcon />
          <span className="text-sm">For you</span>
          <span className="text-sm">Following</span>
        </div>

        <div className="flex justify-evenly w-full gap-32">
          <div className="pt-6 flex-1">
            {dummyBlogs.map((blog, i) => (
              <div
                key={blog.title + i}
                className="flex pt-6 justify-between gap-5 items-center border-b border-[#F2F2F2] pb-8"
              >
                <div className="w-full md:hidden lg:block">
                  <div className="gap-2 flex items-center mb-3">
                    <div className="w-5 h-5">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm line-clamp-1">
                        {blog.author}
                      </span>
                      <span className={`${myFontBold.className} text-xl`}>
                        ·
                      </span>
                      <span className="text-sm text-[#6b6b6b]">
                        {blog.date}
                      </span>
                      <span>{blog.isPremium}</span>
                    </div>
                  </div>

                  <div className=" gap-6 flex justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-base md:text-xl line-clamp-2 ${myFontSuperBold.className}`}
                      >
                        {blog.title}
                      </h3>
                      <p
                        className={`hidden text-base text-muted md:line-clamp-2 pt-1 ${myFontSerif.className}`}
                      >
                        {blog.description}
                      </p>
                    </div>

                    <div className="w-20 h-14 sm:w-32 sm:h-20 md:w-28 md:h-28 overflow-hidden flex justify-center">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="py-4 flex items-center justify-between ">
                    <div className="flex items-center gap-1 flex-row-reverse">
                      <span className="text-sm text-[#6b6b6b]">
                        {blog.readTime}
                      </span>
                      <span className={`${myFontBold.className} block text-xl`}>
                        ·
                      </span>
                      <Link
                        href={"/"}
                        className="block text-muted py-[2px] px-2 border border-[#f2f2f2] rounded-full bg-[#f2f2f2] text-xs"
                      >
                        {blog.tag}
                      </Link>
                    </div>
                    <div className="flex gap-3 sm:mr-10">
                      <Bookmark />
                      <MinIcon />
                      <TripleDotIcon />
                    </div>
                  </div>
                </div>

                {/* MEDIUM SIZE */}
                <div className="hidden md:block lg:hidden md:flex-1">
                  <div className="gap-2 flex items-center mb-2">
                    <div className="w-5 h-5">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-sm">{blog.author}</span>
                    <span
                      className={`${myFontBold.className} hidden sm:block text-xl`}
                    >
                      ·
                    </span>
                    <span className="text-sm text-[#6b6b6b]">{blog.date}</span>

                    <div className="text-sm text-[#6B6B6B] flex items-center gap-1">
                      <span>{blog.isPremium}</span>
                      <p>Member only</p>
                    </div>
                  </div>
                  <h3
                    className={`text-base md:text-xl line-clamp-2 ${myFontSuperBold.className}`}
                  >
                    {blog.title}
                  </h3>
                  <p
                    className={`hidden text-base text-muted md:line-clamp-2 pt-1 ${myFontSerif.className}`}
                  >
                    {blog.description}
                  </p>

                  <div className="pt-1 flex items-center justify-between md:pt-8">
                    <div className="flex items-center gap-2">
                      <Link
                        href={"/"}
                        className="hidden sm:block text-muted py-[2px] px-2 border border-[#f2f2f2] rounded-full bg-[#f2f2f2] text-xs"
                      >
                        {blog.tag}
                      </Link>
                      <span className="text-sm text-[#6b6b6b]">
                        {blog.readTime}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Bookmark />
                      <MinIcon />
                      <TripleDotIcon />
                    </div>
                  </div>
                </div>

                <div className="w-24 h-24 sm:w-36 sm:h-28 md:w-52 md:h-36 overflow-hidden object-cover hidden md:flex lg:hidden justify-center">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={200}
                    height={150}
                    className="object-cover transition-all duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          <aside className="hidden lg:block max-w-sm sticky top-10 h-screen flex-1 px-6 border-l border-[#F2F2F2]">
            <div>
              <div>
                <h3 className={`${myFontBold.className} pb-4 mt-10`}>
                  Recommended topics
                </h3>
                <div>
                  {blogTags.map((tag, i) => (
                    <Button
                      key={i}
                      variant={"outline"}
                      className="text-sm text-dark mr-2 bg-[#f2f2f2] py-2 px-4 border border-[#f2f2f2] rounded-full gap-2 mb-2"
                    >
                      <Link href={`/tag/${tag.name.replace(/\s+/g, "-")}`}>
                        {tag.name}
                      </Link>
                    </Button>
                  ))}
                  <div className="mt-3">
                    <Link href="/" className="text-[#1A8917] text-sm">
                      See more topics
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className={`${myFontBold.className}`}>Who to follow</h3>
                <div>
                  {suggestUserFollow.map((user) => (
                    <div key={user.id} className="flex pt-4">
                      <div className="w-8 h-8 rounded-full bg-sky-400 overflow-hidden flex justify-center">
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="mr-2 ml-4">
                          <h5 className={`text-base ${myFontBold.className}`}>
                            {user.name}
                          </h5>
                          <p className="text-sm text-[#6B6B6B] line-clamp-1">
                            {user.bio}
                          </p>
                        </div>
                        <Button
                          variant={"ghost"}
                          className="text-sm px-4 border border-[#242424] rounded-full"
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6">
                    <Link href="/" className="text-[#1A8917] text-sm">
                      See more suggestions
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`mt-10 ${myFontBold.className} text-base`}>
                  Reading list
                </h3>
                <p className="pt-4 text-sm text-[#6B6B6B]">
                  Click the
                  <span className="inline-block mt-2">
                    <Bookmark />
                  </span>
                  on any story to easily add it to your reading list or a custom
                  list that you can share.
                </p>

                <div className="py-6 flex flex-wrap">
                  {discoverTags.map((tag, i) => (
                    <Link
                      key={i}
                      href="/"
                      className="text-muted text-xs mr-4 mb-2"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
