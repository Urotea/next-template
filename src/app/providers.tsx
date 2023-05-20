"use client";

import { refocusExchange } from "@urql/exchange-refocus";
import { retryExchange } from "@urql/exchange-retry";
import { PropsWithChildren } from "react";
import { Client, debugExchange, fetchExchange } from "urql";
import { cacheExchange } from "urql";
import { Provider } from "urql";

const client = new Client({
  url: "http://localhost:3000/api/v1/graphql",
  exchanges: [cacheExchange, retryExchange({}), refocusExchange(), debugExchange, fetchExchange],
  requestPolicy: "cache-and-network",
  suspense: true,
});

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default Providers;
