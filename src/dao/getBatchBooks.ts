import { Book } from "@/generated/graphql";
import createBook from "@/utils/createBook";

// DBから取る処理をmockしている
const getBatchBooks = async (
  ids: readonly string[]
): Promise<(Book | Error)[]> => {
  console.log("getBatchBooks called", ids);
  return ids.map((id) => {
    if (id === "1") {
      return createBook(id, "graphql introduction", "1");
    }

    return createBook(id, "gRPC introduction", "2");
  });
};

export default getBatchBooks;
