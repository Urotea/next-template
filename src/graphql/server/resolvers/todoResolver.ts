import { TodoResolvers } from "@/generated/graphql";
import { Context } from "@/graphql/server/context";
import { ServiceError } from "../repositories/errors";

const todoResolver: TodoResolvers<Context> = {
  id: (parent, args, context, info) => {
    return parent.id;
  },
  detail: async (parent, args, context, info) => {
    const backendTodo = await context.todoRepository.getBackendTodo(parent.id);
    if (backendTodo instanceof ServiceError) {
      console.error("todoResolver.detail", backendTodo);
      return null;
    }
    return backendTodo.detail;
  },
  owner: async (parent, args, context, info) => {
    const backendTodo = await context.todoRepository.getBackendTodo(parent.id);
    if (backendTodo instanceof ServiceError) {
      console.error("todoResolver.detail", backendTodo);
      return null;
    }
    return { id: backendTodo.ownerUserId };
  },
  state: async (parent, args, context, info) => {
    const backendTodo = await context.todoRepository.getBackendTodo(parent.id);
    if (backendTodo instanceof ServiceError) {
      console.error("todoResolver.detail", backendTodo);
      return null;
    }
    switch (backendTodo.state) {
      case "todo":
        return "TODO";
      case "doing":
        return "DOING";
      case "done":
        return "DONE";
    }
  },
  title: async (parent, args, context, info) => {
    const backendTodo = await context.todoRepository.getBackendTodo(parent.id);
    if (backendTodo instanceof ServiceError) {
      console.error("todoResolver.detail", backendTodo);
      return null;
    }
    return backendTodo.title;
  },
};

export default todoResolver;
