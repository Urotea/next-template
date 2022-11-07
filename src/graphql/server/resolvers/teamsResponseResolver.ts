import { TeamsResponseResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const userResponseResolver: TeamsResponseResolvers<Context> = {
  teams: (parent, args, context, info) => {
    return parent.teams;
  },
};

export default userResponseResolver;
