import { ApolloServer, Config } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { Resolvers } from "@/generated/graphql";
import queryResolver from "@/graphql/server/resolvers/queryResolver";
import userResponseResolver from "@/graphql/server/resolvers/userResponseResolver";
import teamsResponseResolver from "@/graphql/server/resolvers/teamsResponseResolver";
import teamResolver from "@/graphql/server/resolvers/teamResolver";
import todoResolver from "@/graphql/server/resolvers/todoResolver";
import userResolver from "@/graphql/server/resolvers/userResolver";
import UserRepository from "@/graphql/server/repositories/UserRepository";
import { Context } from "@/graphql/server/context";
import TodoRepository from "@/graphql/server/repositories/TodoRepository";

const resolvers: Resolvers = {
  Query: queryResolver,
  TeamsResponse: teamsResponseResolver,
  UserResponse: userResponseResolver,
  Team: teamResolver,
  Todo: todoResolver,
  User: userResolver,
};

const serverConfig: Config = {
  typeDefs: fs.readFileSync(process.cwd() + "/graphql/v1/schema.graphql", {
    encoding: "utf8",
  }),
  resolvers: resolvers,
  context: ({ req }): Context => {
    const userRepository = new UserRepository();
    const todoRepository = new TodoRepository();

    return { userRepository, todoRepository };
  },
};

const apolloServer = new ApolloServer(serverConfig);
const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/v1/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
