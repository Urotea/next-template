import { UserResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";
import { ServiceError } from "@/graphql/server/repositories/errors";

const userResolver: UserResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  name: async (parent, args, context, info) => {
    const backendUser = await context.userRepository.getBackendUser(parent.id);
    if (backendUser instanceof ServiceError) {
      console.error("userResolver.name", backendUser);
      return null;
    }
    return backendUser.name;
  },
  age: async (parent, args, context, info) => {
    const backendUser = await context.userRepository.getBackendUser(parent.id);
    if (backendUser instanceof ServiceError) {
      console.error("userResolver.age", backendUser);
      return null;
    }
    return backendUser.age;
  },
  memberOf: async (parent, args, context, info) => {
    const backendTeamIds =
      await context.userRepository.getBackendUserMemberOfTeamIds(parent.id);
    if (backendTeamIds instanceof ServiceError) {
      console.error("userResolver.memberOf", backendTeamIds);
      return [];
    }
    return backendTeamIds.map((id) => ({ id }));
  },
  todos: async (parent, args, context, info) => {
    const backendTodoIds = await context.userRepository.getBackendTodoIds(
      parent.id
    );
    if (backendTodoIds instanceof ServiceError) {
      console.error("userResolver.todos", backendTodoIds);
      return [];
    }
    return backendTodoIds.map((id) => ({ id }));
  },
};

export default userResolver;
