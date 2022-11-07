import { UserResponseResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const userResponseResolver: UserResponseResolvers<Context> = {
  user: (parent, args, context, info) => {
    return parent.user;
  },
};

export default userResponseResolver;
