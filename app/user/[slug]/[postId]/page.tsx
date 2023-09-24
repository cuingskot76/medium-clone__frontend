import React from "react";

import { Metadata } from "next";

type UserPostProps = {
  params: { slug: string; postId: string };
  title: string;
  created_at: string;
  username: string;
};

export async function generateMetadata({
  params,
}: UserPostProps): Promise<Metadata> {
  // get post by id's
  // e.g. "post-title-clmrve1rl0000g8owahqjway6" to "clmrve1rl0000g8owahqjway6"
  const postId = decodeURIComponent(params.postId)
    .split("-")
    .slice(-1)
    .join("");

  // get author post
  const authorPost = decodeURIComponent(params.slug)
    .replace("@", "")
    .split("-")
    .join(" ");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/v1/post/${postId}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const data = await res.json();

  return {
    title: `${data.title} | by ${authorPost} | Medium`,
  };
}

const UserPost = ({ params }: UserPostProps) => {
  return <div>UserPost</div>;
};

export default UserPost;
