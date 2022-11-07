import { NotFoundError } from "@/graphql/server/dao/errors";

const batchGetUserTodoIds = async (
  keys: readonly string[]
): Promise<(string[] | NotFoundError)[]> => {
  console.log("batchGetUserTodoIds called", keys);
  // 本来はDBやbackend APIを呼び出すが、今回はダミーのデータを返す
  return keys.map(createTodoIds);
};

const createTodoIds = (id: string): string[] | NotFoundError => {
  if (id === "not-found") {
    return new NotFoundError("user not found");
  }

  return [`${id}-todo-1`, `${id}-todo-2`, `${id}-todo-3`];
};

export default batchGetUserTodoIds;
