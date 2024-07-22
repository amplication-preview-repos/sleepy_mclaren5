import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  post?: PostWhereUniqueInput;
};
