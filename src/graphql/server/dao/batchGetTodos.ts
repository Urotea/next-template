import { BackendTodo } from "./backendTypes";
import { NotFoundError } from "./errors";

const batchGetTodos = async (
  keys: readonly string[]
): Promise<(BackendTodo | NotFoundError)[]> => {
  console.log("batchGetTodos called", keys);
  // 本来はDBやbackend APIを呼び出すが、今回はダミーのデータを返す
  return keys.map(createTodo);
};

const createTodo = (id: string): BackendTodo | NotFoundError => {
  if (id === "not-found") {
    return new NotFoundError("todo not found");
  }

  return {
    id: id,
    ownerUserId: id,
    title: `title-${id}`,
    detail: `detail-${id}`,
    state: "todo",
  };
};

export default batchGetTodos;
