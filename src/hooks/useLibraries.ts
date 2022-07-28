import { print } from "graphql";
import useSWR from "swr";
import { API_URL } from "@/constant";
import {
  GetBooksByLibraryDocument,
  GetBooksByLibraryQuery,
  getSdk,
} from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";

const librariesRequest = async (
  url: string
): Promise<GetBooksByLibraryQuery> => {
  const client = getSdk(new GraphQLClient(url));
  return client.GetBooksByLibrary();
};

const useLibraries = () => {
  return useSWR([API_URL, print(GetBooksByLibraryDocument)], librariesRequest);
};

export default useLibraries;
