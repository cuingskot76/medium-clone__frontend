import React from "react";

import { Metadata } from "next";
import { UserProps } from "@/types";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import SubscribePostIcon from "@/components/icons/SubscribePostIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserPost from "@/app/user/[slug]/UserPost";
import { getCurrentUserProfile } from "@/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/v1/@${getCurrentUserProfile(
      params.slug
    )}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const data: UserProps = await res.json();

  return {
    title: `${data.name} - Medium`,
  };
}

const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

const getCurrentUser = async (username: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/@${username}`,
    {
      next: { revalidate: 0 },
    }
  );

  const data = await res.json();
  return data;
};

const User = async ({ params }: { params: { slug: string } }) => {
  const user: UserProps = await getCurrentUser(
    getCurrentUserProfile(params.slug)
  );

  return (
    <section>
      {user.banner && (
        <div className="h-[150px] w-full bg-slate-200 overflow-hidden flex justify-center mb-6 ">
          <Image
            src={user.banner}
            width={1000}
            height={1000}
            alt={user.banner}
            className="object-cover"
          />
        </div>
      )}

      <div className="px-6 mt-5">
        <div className="flex gap-5">
          <Avatar className="w-12 h-12">
            <AvatarImage
              src={user.image}
              alt={user.image}
              width={100}
              height={100}
            />
            <Skeleton className="h-12 w-12 rounded-full bg-slate-300" />
          </Avatar>
          <div>
            <h2 className={`text-2xl ${myFontBold.className}`}>{user.name}</h2>
            <span className="text-[#6B6B6B] text-base">
              {`${
                user?.follower && user?.follower?.length > 2
                  ? `${user?.follower?.length} Followers`
                  : `${user?.follower?.length} Follower`
              }`}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5 mb-6">
          <Button className="bg-[#1a8917] text-white hover:bg-[#156912] rounded-full">
            Follow
          </Button>
          <Button className="bg-[#1a8917] hover:bg-[#156912] rounded-full w-fit h-fit p-0 m-0">
            <SubscribePostIcon />
          </Button>
        </div>

        <div>
          <Tabs defaultValue="home" className="">
            <TabsList className="bg-white gap-5">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <div>
                {user.post?.map((post) => (
                  <UserPost key={post.id} {...post} username={user.name} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about">Hello World About</TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default User;
