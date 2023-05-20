"use client";

import useMyTeams from "@/app/_hooks/useMyTeams";

type Props = {};

const TeamViewer: React.FC<Props> = () => {
  const data = useMyTeams();

  const teams = data?.map((team) => {
    return (
      <div key={team.id}>
        <h2>{team.name}</h2>
      </div>
    );
  }) ?? [];

  return <div>{teams}</div>;
};

export default TeamViewer;
