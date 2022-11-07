import DataLoader from "dataloader";
import { NotFoundError } from "@/graphql/server/dao/errors";
import { ServiceError } from "@/graphql/server/repositories/errors";
import { BackendTeam } from "@/graphql/server/dao/backendTypes";
import batchGetTeams from "@/graphql/server/dao/batchGetTeams";
import batchGetTeamMemberIds from "../dao/batchGetTeamMemberIds";

class TeamRepository {
  private readonly teamDataLoader;
  private readonly teamMemberIdsDataLoader;

  constructor() {
    this.teamDataLoader = new DataLoader<string, BackendTeam, string>(
      batchGetTeams,
      {
        cacheKeyFn: (key) => key,
      }
    );
    this.teamMemberIdsDataLoader = new DataLoader<string, string[], string>(
      batchGetTeamMemberIds,
      {
        cacheKeyFn: (key) => key,
      }
    );
  }

  getBackendTeam(id: string): Promise<BackendTeam | ServiceError> {
    return this.teamDataLoader
      .load(id)
      .catch((e: NotFoundError) => new ServiceError("getBackendUser error", e));
  }

  getBackendTeamMemberIds(id: string): Promise<string[] | ServiceError> {
    return this.teamMemberIdsDataLoader
      .load(id)
      .catch((e: NotFoundError) => new ServiceError("getBackendUser error", e));
  }
}

export default TeamRepository;
