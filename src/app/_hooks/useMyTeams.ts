import { useListTeamsQuery } from "@/generated/graphql";

const useMyTeams = () => {
  const [{ data }, _] = useListTeamsQuery();

  return data?.teams;
};

export default useMyTeams;
