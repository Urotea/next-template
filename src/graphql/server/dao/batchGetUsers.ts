import { BackendUser } from "@/graphql/server/dao/backendTypes";
import { NotFoundError } from "@/graphql/server/dao/errors";

const batchGetUsers = async (
  keys: readonly string[]
): Promise<(BackendUser | NotFoundError)[]> => {
  console.log("batchGetUsers called", keys);
  // 本来はDBやbackend APIを呼び出すが、今回はダミーのデータを返す
  return keys.map(createUser);
};

const createUser = (id: string): BackendUser | NotFoundError => {
  if (id === "not-found") {
    return new NotFoundError("user not found");
  }

  return {
    id: id,
    name: `John Doe ${id}`,
    age: 42,
  };
};

export default batchGetUsers;
