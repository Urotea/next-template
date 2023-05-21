"use client";

import generateGraphqlClient from "@/utils/generateGraphqlClient";
import { PropsWithChildren, useMemo } from "react";
import { Provider } from "urql";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const client = useMemo(() => generateGraphqlClient(), []);
  return <Provider value={client}>{children}</Provider>;
};

export default Providers;
