import { UserResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const userResolver: UserResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  name: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  age: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  memberOf: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  todos: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
};

export default userResolver;
