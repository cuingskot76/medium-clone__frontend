import ArrowUp from "@/components/icons/ArrowUp";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getPostByIds = async (postId: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/post/${postId}`
  );

  return data;
};

const Post = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const ids = decodeURIComponent(postId).split("-").slice(-1).join("");

  const data = await getPostByIds(ids);

  return (
    <section>
      <section>
        <div className="sm:hidden flex justify-center items-center cursor-pointer h-10 border-b border-[#F2F2F2]">
          <p className="mr-2 text-sm text-[#6B6B6B]">Open in app</p>
          <ArrowUp />
        </div>
      </section>
    </section>
  );
};

export default Post;
