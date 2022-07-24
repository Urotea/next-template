import { API_URL } from "@/constant";
import { getSdk } from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";

const helloRequest = async (): Promise<string> => {
  const client = getSdk(new GraphQLClient(API_URL));
  return client.hello({}).then((res) => res.hello.message);
};

export default helloRequest;
