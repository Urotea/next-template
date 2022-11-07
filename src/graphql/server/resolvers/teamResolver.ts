import { TeamResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const teamResolver: TeamResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  name: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  members: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
};

export default teamResolver;
