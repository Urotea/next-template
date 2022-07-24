import { API_URL } from "@/constant";
import { getSdk } from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";

const searchRequest = async (query: string): Promise<string> => {
  const client = getSdk(new GraphQLClient(API_URL));
  return client.search({ query }).then((res) => res.search.result);
};

export default searchRequest;
