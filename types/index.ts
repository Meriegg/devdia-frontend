export interface LikeType {
  id: string;
  post_id: string;
  user_ud: string;

  post: PostType;
  user: UserType;
}

export interface PostType {
  id: string;
  code?: string;
  content?: string;
  author_id: string;
  likes: Array<LikeType>;

  author: UserType;
}

export interface UserType {
  id: string;
  username: string;
  email: string;
  // password: string;
  r_t?: string;
  joined_on: Date;
  posts: Array<PostType>;
  liked_posts: Array<LikeType>;
}

export interface MyContextType {
  accessToken: string | null;
  userData: UserType | null;
  setAccessToken: (value: string | null) => void;
  setUserData: (value: UserType | null) => void;
}
