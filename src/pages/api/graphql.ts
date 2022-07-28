import { ApolloServer, Config } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { Resolvers } from "@/generated/graphql";

const getLibraries = async (): Promise<{ branch: string }[]> => {
  return [
    {
      branch: "downtown",
    },
    {
      branch: "riverside",
    },
  ];
};

const getBooks = async (): Promise<{ title: string }[]> => {
  return [
    {
      title: "hoge",
    },
    {
      title: "fuga",
    },
  ];
};

const getAuthor = async (): Promise<{ name: string }[]> => {
  return [
    {
      name: "name1",
    },
    {
      name: "name2",
    },
  ];
};

const resolvers: Resolvers = {
  Query: {
    libraries: (parent, args, context, info) => {
      console.log("query.libraries", parent);
      return getLibraries();
    },
  },
  Library: {
    books: async (parent, args, context, info) => {
      console.log("library.books", parent);
      return getBooks();
    },
  },
  Book: {
    author: async (parent, args, context, info) => {
      console.log("book.author", parent);
      return getAuthor();
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
