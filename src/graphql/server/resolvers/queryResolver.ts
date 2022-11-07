import { QueryResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const queryResolver: QueryResolvers<Context, {}> = {
  teams: (parent, args, context, info) => {
    // TODO
    return {
      teams: [],
    };
  },
  user: (parent, args, context, info) => {
    // TODO
    return {
      user: null,
    };
  },
};

export default queryResolver;
