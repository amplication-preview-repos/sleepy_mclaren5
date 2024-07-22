import { User } from "../user/User";
import { Post } from "../post/Post";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  user?: User | null;
  post?: Post | null;
};
