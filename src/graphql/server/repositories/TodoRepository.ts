import DataLoader from "dataloader";
import { BackendTodo } from "@/graphql/server/dao/backendTypes";
import { ServiceError } from "@/graphql/server/repositories/errors";
import { NotFoundError } from "@/graphql/server/dao/errors";
import batchGetTodos from "@/graphql/server/dao/batchGetTodos";

class TodoRepository {
  private readonly todoDataLoader;

  constructor() {
    this.todoDataLoader = new DataLoader<string, BackendTodo, string>(
      batchGetTodos,
      {
        cacheKeyFn: (key) => key,
      }
    );
  }

  getBackendTodo(id: string): Promise<BackendTodo | ServiceError> {
    return this.todoDataLoader
      .load(id)
      .catch((e: NotFoundError) => new ServiceError("getBackendUser error", e));
  }
}

export default TodoRepository;
