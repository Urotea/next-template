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
  memberOf: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  todos: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
};

export default userResolver;
