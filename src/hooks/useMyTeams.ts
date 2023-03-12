import { print } from "graphql";
import { API_URL } from "@/constant";
import { getSdk, ListTeamsDocument, ListTeamsQuery } from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";
import { useMemo } from "react";
import useSWR from "swr";

const useMyTeams = (userId: string) => {
  const graphqlSdk = useMemo(() => getSdk(new GraphQLClient(API_URL)), []);
  const fetcher = () => graphqlSdk.ListTeams();
  const { data } = useSWR([print(ListTeamsDocument)], fetcher, {
    suspense: true,
  });

  if (!data) {
    throw new Error("No data");
  }

  return data;
};

export default useMyTeams;
