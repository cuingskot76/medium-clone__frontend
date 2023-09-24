import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DefaultPostBanner from "@/public/images/medium.png";

const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

const UserPost = ({ id, title, created_at, username, imageBanner }: any) => {
  const getTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const date = new Date(timestamp);
    const diff = now.getTime() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0 && days <= 7) {
      return `${days} days ago`;
    } else if (days > 7) {
      return new Date(timestamp).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
      });
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  return (
    <div className="mt-5">
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
    </div>
  );
};

export default UserPost;
