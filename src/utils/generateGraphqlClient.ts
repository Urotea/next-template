import { refocusExchange } from "@urql/exchange-refocus";
import { retryExchange } from "@urql/exchange-retry";
import { Client, cacheExchange, debugExchange, fetchExchange } from "urql";
import { SharedEnvs } from "./sharedEnvs";

const generateGraphqlClient = (server?: boolean) => {
  const envs = new SharedEnvs();
  return new Client({
    url: server
      ? "http://localhost:3000/api/v1/graphql"
      : new URL("/api/v1/graphql", envs.nextUrl).href,
    exchanges: [
      cacheExchange,
      retryExchange({}),
      refocusExchange(),
      debugExchange,
      fetchExchange,
    ],
    requestPolicy: "cache-and-network",
    suspense: true,
  });
};

export default generateGraphqlClient;
