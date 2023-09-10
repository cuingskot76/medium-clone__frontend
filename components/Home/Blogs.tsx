import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { blogTags, discoverTags, dummyBlogs } from "@/constants";
import Image from "next/image";
import Bookmark from "../icons/Bookmark";

const myFontBold = localFont({
  src: "../../app/sohne-bold.otf",
});

const myFontSuperBold = localFont({
  src: "../../app/sohne-superBold.otf",
});

const Blogs = () => {
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
            {dummyBlogs.map((blog, i) => (
              <div
                key={blog.title + i}
                className="flex mb-12 justify-between gap-5 items-center"
              >
                <div className="flex-1">
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
                  </div>
                  <h3
                    className={`text-base md:text-xl line-clamp-2 ${myFontSuperBold.className}`}
                  >
                    {blog.title}
                  </h3>
                  <p className="hidden text-base text-muted md:line-clamp-2 pt-1">
                    {blog.description}
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-[#6b6b6b]">
                        {blog.date}
                      </span>
                      <span className={`${myFontBold.className} text-xl`}>
                        ·
                      </span>
                      <span className="text-sm text-[#6b6b6b]">
                        {blog.readTime}
                      </span>
                      <span
                        className={`${myFontBold.className} hidden sm:block text-xl`}
                      >
                        ·
                      </span>
                      <Link
                        href={"/"}
                        className="hidden sm:block text-muted py-[2px] px-2 border border-[#f2f2f2] rounded-full bg-[#f2f2f2] text-xs"
                      >
                        {blog.tag}
                      </Link>
                      <span>{blog.isPremium}</span>
                    </div>
                    <Bookmark />
                  </div>
                </div>

                <div className="w-24 h-24 sm:w-36 sm:h-28 md:w-52 md:h-36 overflow-hidden object-cover flex justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Blogs;
