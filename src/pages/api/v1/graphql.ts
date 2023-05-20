import fs from "fs";
import { Resolvers } from "@/generated/graphql";
import queryResolver from "@/graphql/server/resolvers/queryResolver";
import teamResolver from "@/graphql/server/resolvers/teamResolver";
import todoResolver from "@/graphql/server/resolvers/todoResolver";
import userResolver from "@/graphql/server/resolvers/userResolver";
import UserRepository from "@/graphql/server/repositories/UserRepository";
import TodoRepository from "@/graphql/server/repositories/TodoRepository";
import TeamRepository from "@/graphql/server/repositories/TeamRepository";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer, ApolloServerOptions, BaseContext } from "@apollo/server";
import { NextApiRequest } from "next";

const resolvers: Resolvers = {
  Query: queryResolver,
  Team: teamResolver,
  Todo: todoResolver,
  User: userResolver,
};

interface ContextType extends BaseContext {
  userRepository: UserRepository;
  todoRepository: TodoRepository;
  teamRepository: TeamRepository;
}

const serverConfig: ApolloServerOptions<ContextType> = {
  typeDefs: [
    fs.readFileSync(`${process.cwd()}/graphql/v1/schema/query.graphql`, {
      encoding: "utf8",
    }),
  ],
  resolvers: resolvers,
};

const apolloServer = new ApolloServer(serverConfig);

export default startServerAndCreateNextHandler<NextApiRequest, ContextType>(apolloServer, {
  context: async (req, res) => {
    const userRepository = new UserRepository();
    const todoRepository = new TodoRepository();
    const teamRepository = new TeamRepository();

    return { req, res, userRepository, todoRepository, teamRepository };
  },
});
