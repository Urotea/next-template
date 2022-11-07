import { BackendTeam } from "@/graphql/server/dao/backendTypes";
import { NotFoundError } from "@/graphql/server/dao/errors";

const batchGetTeams = async (
  keys: readonly string[]
): Promise<(BackendTeam | NotFoundError)[]> => {
  console.log("batchGetTeams called", keys);
  // 本来はDBやbackend APIを呼び出すが、今回はダミーのデータを返す
  return keys.map(createTeam);
};

const createTeam = (id: string): BackendTeam | NotFoundError => {
  if (id === "not-found") {
    return new NotFoundError("team not found");
  }

  return {
    id: id,
    name: `team-${id}`,
  };
};

export default batchGetTeams;
