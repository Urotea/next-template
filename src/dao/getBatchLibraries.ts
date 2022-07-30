import { Library } from "@/generated/graphql";
import createLibrary from "@/utils/createLibrary";

// DBから取る処理をmockしている
const getBatchLibraries = async (
  ids: readonly string[]
): Promise<(Library | Error)[]> => {
  console.log("getBatchLibraries called", ids);
  return ids.map((id) => {
    if (id === "1") {
      return createLibrary(id, "downtown", ["1", "2"]);
    }

    return createLibrary(id, "riverside", ["3"]);
  });
};

export default getBatchLibraries;
