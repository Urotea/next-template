import DataLoader from "dataloader";
import { NotFoundError } from "@/graphql/server/dao/errors";
import { ServiceError } from "@/graphql/server/repositories/errors";
import { BackendTeam } from "@/graphql/server/dao/backendTypes";
import batchGetTeams from "@/graphql/server/dao/batchGetTeams";

class TeamRepository {
  private readonly teamDataLoader;

  constructor() {
    this.teamDataLoader = new DataLoader<string, BackendTeam, string>(
      batchGetTeams,
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
}

export default TeamRepository;
