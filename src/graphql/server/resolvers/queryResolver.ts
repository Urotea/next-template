import { QueryResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const queryResolver: QueryResolvers<Context, {}> = {
  teams: (parent, args, context, info) => {
    return {
      teams: [{ id: "1" }, { id: "2" }],
    };
  },
  user: (parent, args, context, info) => {
    return {
      user: { id: args.id },
    };
  },
};

export default queryResolver;
