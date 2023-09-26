import { PostProps } from "@/types";

//   get read time of post
export const getReadTime = (content: string) => {
  const wordsPerMinute = 200;
  // remove all the spaces
  const wordCount = content.trim().split(/\s+/g).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
};

//  get the first and second highest views post
export const getTwoMaxView = (postView: PostProps[]) => {
  return postView.sort((a, b) => b.views - a.views).slice(0, 2);
};

// get time posted
export const getTimeAgo = (timestamp: string): string => {
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

// get current user profile
// e.g. /user/@afrizal-pamuji => %40afrizal-pamuji => afrizal pamuji
export const getCurrentUserProfile = (params: string) => {
  const username = decodeURIComponent(params)
    .replace("@", "")
    .split("-")
    .join(" ");

  return username;
};

// get current post title tag
// e.g. /tag/programming => programming => Programming
export const getTitleTag = (params: string) => {
  const title = decodeURIComponent(params)
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return title;
};

// get all posts with the latest created_at
export const getLatestPosts = (posts: PostProps[]) => {
  return posts.sort((a: any, b: any) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
};
