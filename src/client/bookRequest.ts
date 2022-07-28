import { API_URL } from "@/constant";
import { GetBooksByLibraryQuery, getSdk } from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";

const librariesRequest = async (): Promise<GetBooksByLibraryQuery> => {
  const client = getSdk(new GraphQLClient(API_URL));
  return client.GetBooksByLibrary();
};

export default librariesRequest;
