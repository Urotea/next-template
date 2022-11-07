import { TeamResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";
import { ServiceError } from "../repositories/errors";

const teamResolver: TeamResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  name: async (parent, args, context, info) => {
    const backendTeam = await context.teamRepository.getBackendTeam(parent.id);
    if (backendTeam instanceof ServiceError) {
      console.error("teamResolver.name", backendTeam);
      return null;
    }
    return backendTeam.name;
  },
  members: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
};

export default teamResolver;
