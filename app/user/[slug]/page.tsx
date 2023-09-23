import React from "react";

import { Metadata, ResolvingMetadata } from "next";
import { UserProps } from "@/types";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read user route params
  const currentUsername = decodeURIComponent(params.slug)
    .replace("@", "")
    .split("-")
    .join(" ");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/v1/@${currentUsername}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const data: UserProps = await res.json();

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${data.name} - Medium`,
  };
}

const User = ({ params }: Props) => {
  // remove "@"
  // e.g. "@Afrizal-Setya-Pamuji" to "Afrizal Setya Pamuji"
  const currentUsername = decodeURIComponent(params.slug)
    .replace("@", "")
    .split("-")
    .join(" ");

  console.log("curr", currentUsername);

  return <div>User</div>;
};

export default User;
