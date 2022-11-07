import { TodoResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";

const todoResolver: TodoResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  detail: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  owner: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  state: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
  title: (parent, args, context, info) => {
    throw new Error("Function not implemented.");
  },
};

export default todoResolver;
