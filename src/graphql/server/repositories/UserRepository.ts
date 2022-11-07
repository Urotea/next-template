import DataLoader from "dataloader";
import batchGetUsers from "@/graphql/server/dao/batchGetUsers";
import { BackendUser } from "@/graphql/server/dao/backendTypes";
import { ServiceError } from "@/graphql/server/repositories/errors";
import { NotFoundError } from "@/graphql/server/dao/errors";

class UserRepository {
  private readonly userDataLoader;

  constructor() {
    this.userDataLoader = new DataLoader<string, BackendUser, string>(
      batchGetUsers,
      {
        cacheKeyFn: (key) => key,
      }
    );
  }

  getBackendUser(id: string): Promise<BackendUser | ServiceError> {
    return this.userDataLoader
      .load(id)
      .catch((e: NotFoundError) => new ServiceError("getBackendUser error", e));
  }
}

export default UserRepository;
