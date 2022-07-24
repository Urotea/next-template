import { ApolloServer, Config } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { Resolvers } from "@/generated/graphql";

const resolvers: Resolvers = {
  Query: {
    hello(parent, args, context, info) {
      return {
        message: "Hello world",
      };
    },
    search(parent, args, context, info) {
      return {
        result: `param is ${args.query}`,
      };
    },
  },
};

const serverConfig: Config = {
  typeDefs: fs.readFileSync(process.cwd() + "/graphql/schema.graphql", {
    encoding: "utf8",
  }),
  resolvers: resolvers,
  context: ({ req }) => {
    return null;
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
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
