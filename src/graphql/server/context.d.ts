import UserRepository from "@/graphql/server/repositories/UserRepository";
import TodoRepository from "@/graphql/server/repositories/TodoRepository";
import TeamRepository from "@/graphql/server/repositories/TeamRepository";

export type Context = {
  userRepository: UserRepository;
  todoRepository: TodoRepository;
  teamRepository: TeamRepository;
};
