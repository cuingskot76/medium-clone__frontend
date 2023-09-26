export interface UserProps {
  name: string;
  email: string;
  image: string;
  bio: string;
  follower?: [
    {
      user_id: string;
    }
  ];
  follow?: [
    {
      user_id: string;
    }
  ];
  banner?: string;
  post?: [
    {
      id: string;
      title: string;
      subTitle: string;
      imageBanner: string;
      content: string;
      created_at: string;
      updated_at: string;
      publish: boolean;
      premium: boolean;
      category: {
        name: string;
      };
      views: number;
      params?: string;
    }
  ];
}

export interface PostProps {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  imageBanner: string;
  created_at: string;
  updated_at: string;
  publish: boolean;
  premium: boolean;
  // category: {
  //   name: string;
  // };
  // username: string;
  category: Category;
  views: number;
  user: UserProps;
  like?: LikeProps[];
  comment?: CommentProps[];
}

interface LikeProps {
  id: string;
  created_at: string;
  userId: string;
  postId: string;
}

interface CommentProps {
  id: string;
  created_at: string;
  updated_at: string;
  desc: string;
  userId: string;
  postId: string;
}

interface Category {
  id: string;
  name: string;
}

export interface PostTrendingProps extends PostProps {
  user: UserProps;
}

export interface TagPostProps {
  post: PostProps[];
}
