import { TeamResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";
import { ServiceError } from "../repositories/errors";

const teamResolver: TeamResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  name: async (parent, args, context, info) => {
    console.debug("teamResolver.name", parent.id);
    const backendTeam = await context.teamRepository.getBackendTeam(parent.id);
    if (backendTeam instanceof ServiceError) {
      console.error("teamResolver.name", backendTeam);
      return null;
    }
    return backendTeam.name;
  },
  members: async (parent, args, context, info) => {
    const backendTeamMemberIds =
      await context.teamRepository.getBackendTeamMemberIds(parent.id);
    if (backendTeamMemberIds instanceof ServiceError) {
      console.error("teamResolver.members", backendTeamMemberIds);
      return [];
    }
    return backendTeamMemberIds.map((id) => ({ id }));
  },
};

export default teamResolver;
