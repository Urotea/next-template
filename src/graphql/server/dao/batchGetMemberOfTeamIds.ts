import { NotFoundError } from "@/graphql/server/dao/errors";

const batchGetMemberOfTeamIds = async (
  keys: readonly string[]
): Promise<(string[] | NotFoundError)[]> => {
  console.log("batchGetMemberOfTeamIds called", keys);
  // 本来はDBやbackend APIを呼び出すが、今回はダミーのデータを返す
  return keys.map(createTeamIds);
};

const createTeamIds = (id: string): string[] | NotFoundError => {
  if (id === "not-found") {
    return new NotFoundError("user not found");
  }

  return [`${id}-team-1`, `${id}-team-2`, `${id}-team-3`];
};

export default batchGetMemberOfTeamIds;
