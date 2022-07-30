import { Author } from "@/generated/graphql";
import createAuthor from "@/utils/createAuthor";

// DBから取る処理をmockしている
const getBatchAuthors = async (
  ids: readonly string[]
): Promise<(Author | Error)[]> => {
  console.log("getBatchAuthors called", ids);
  return ids.map((id) => {
    if (id === "1") {
      return createAuthor(id, "urotea", 100);
    }
    return createAuthor(id, "uro", 10);
  });
};

export default getBatchAuthors;
