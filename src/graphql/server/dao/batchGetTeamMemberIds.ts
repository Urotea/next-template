import { NotFoundError } from "./errors";

const batchGetTeamMemberIds = async (
  keys: readonly string[]
): Promise<(string[] | NotFoundError)[]> => {
  console.log("batchGetTeams called", keys);
  // 本来はDBやbackend APIを呼び出すが、今回はダミーのデータを返す
  return keys.map(createUserIds);
};

const createUserIds = (id: string): string[] | NotFoundError => {
  if (id === "not-found") {
    return new NotFoundError("team not found");
  }

  return [`${id}-1`, `${id}-2`, `${id}-3`];
};

export default batchGetTeamMemberIds;
