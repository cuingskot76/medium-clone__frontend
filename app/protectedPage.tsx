import React from "react";
import { cookies } from "next/dist/client/components/headers";

const protectedPage = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("jwt");
  console.log("accessToken", accessToken);
  return <div>protectedPage</div>;
};

export default protectedPage;
