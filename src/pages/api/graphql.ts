import { ApolloServer, Config } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { Resolvers } from "@/generated/graphql";
import Repository from "@/repository";
import createBook from "@/utils/createBook";
import createAuthor from "@/utils/createAuthor";
import createLibrary from "@/utils/createLibrary";

const resolvers: Resolvers = {
  Query: {
    libraries: (parent, args, context: { repository: Repository }, info) => {
      console.log("query.libraries called");
      return context.repository
        .listLibraryIds()
        .then((ids) => ids.map((id) => createLibrary(id)));
    },
    library: (parent, args, context: { repository: Repository }, info) => {
      console.log("query.library called");
      return context.repository.getLibrary(args.id);
    },
  },
  Library: {
    id: (parent, args, context: { repository: Repository }, info) => {
      console.log("library.id called", parent);
      return parent.id;
    },
    branch: (parent, args, context: { repository: Repository }, info) => {
      console.log("library.branch called", parent);
      return context.repository.getLibrary(parent.id).then((l) => l.branch);
    },
    bookIds: (parent, args, context: { repository: Repository }, info) => {
      console.log("library.bookIds called", parent);
      return context.repository.getLibrary(parent.id).then((l) => l.bookIds);
    },
    books: async (parent, args, context: { repository: Repository }, info) => {
      console.log("library.books called", parent);
      const ids = await context.repository
        .getLibrary(parent.id)
        .then((l) => l.bookIds!);
      return ids.map((id) => createBook(id));
    },
  },
  Book: {
    id: (parent, args, context: { repository: Repository }, info) => {
      console.log("book.id called", parent);
      return parent.id;
    },
    title: (parent, args, context: { repository: Repository }, info) => {
      console.log("book.title called", parent);
      return context.repository.getBook(parent.id).then((b) => b.title);
    },
    authorId: (parent, args, context: { repository: Repository }, info) => {
      console.log("book.authorId called", parent);
      return context.repository.getBook(parent.id).then((b) => b.authorId);
    },
    author: async (parent, args, context: { repository: Repository }, info) => {
      console.log("book.author called", parent);
      const authorId = await context.repository
        .getBook(parent.id)
        .then((b) => b.authorId!);
      return createAuthor(authorId);
    },
  },
  Author: {
    id: (parent, args, context: { repository: Repository }, info) => {
      console.log("author.id called", parent);
      return parent.id;
    },
    name: async (parent, args, context: { repository: Repository }, info) => {
      console.log("author.name called", parent);
      return context.repository.getAuthor(parent.id).then((a) => a.name);
    },
    age: async (parent, args, context: { repository: Repository }, info) => {
      console.log("author.age called", parent);
      return context.repository.getAuthor(parent.id).then((a) => a.age);
    },
  },
};

const serverConfig: Config = {
  typeDefs: fs.readFileSync(process.cwd() + "/graphql/schema.graphql", {
    encoding: "utf8",
  }),
  resolvers: resolvers,
  context: ({ req }) => {
    const repository = new Repository();
    return { repository };
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
