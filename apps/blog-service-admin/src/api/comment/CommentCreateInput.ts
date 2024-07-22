import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  text?: string | null;
  user?: UserWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
};
