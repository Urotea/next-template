"use client";

import useMyTeams from "@/hooks/useMyTeams";

type Props = {
  userId: string;
};

const TeamViewer: React.FC<Props> = ({ userId }) => {
  const data = useMyTeams(userId);

  const teams = data.teams.teams.map((team) => {
    return (
      <div key={team.id}>
        <h2>{team.name}</h2>
      </div>
    );
  });

  return <div>{teams}</div>;
};

export default TeamViewer;
