import UserRepository from "@/graphql/server/repositories/UserRepository";
import TodoRepository from "@/graphql/server/repositories/TodoRepository";

export type Context = {
  userRepository: UserRepository;
  todoRepository: TodoRepository;
};
