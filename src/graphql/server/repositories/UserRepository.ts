import DataLoader from "dataloader";
import batchGetUsers from "@/graphql/server/dao/batchGetUsers";
import { BackendUser } from "@/graphql/server/dao/backendTypes";
import { ServiceError } from "@/graphql/server/repositories/errors";
import { NotFoundError } from "@/graphql/server/dao/errors";
import batchGetMemberOfTeamIds from "@/graphql/server/dao/batchGetMemberOfTeamIds";
import batchGetUserTodoIds from "../dao/batchGetUserTodoIds";

class UserRepository {
  private readonly userDataLoader;
  private readonly memberOfTeamIdsDataLoader;
  private readonly todoIdsDataLoader;

  constructor() {
    this.userDataLoader = new DataLoader<string, BackendUser, string>(
      batchGetUsers,
      {
        cacheKeyFn: (key) => key,
      }
    );
    this.memberOfTeamIdsDataLoader = new DataLoader<string, string[], string>(
      batchGetMemberOfTeamIds,
      {
        cacheKeyFn: (key) => key,
      }
    );
    this.todoIdsDataLoader = new DataLoader<string, string[], string>(
      batchGetUserTodoIds,
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

  getBackendUserMemberOfTeamIds(id: string): Promise<string[] | ServiceError> {
    return this.memberOfTeamIdsDataLoader
      .load(id)
      .catch(
        (e: NotFoundError) =>
          new ServiceError("getBackendUserMemberOfTeamIds error", e)
      );
  }

  getBackendTodoIds(id: string): Promise<string[] | ServiceError> {
    return this.todoIdsDataLoader
      .load(id)
      .catch(
        (e: NotFoundError) => new ServiceError("getBackendTodoIds error", e)
      );
  }
}

export default UserRepository;
