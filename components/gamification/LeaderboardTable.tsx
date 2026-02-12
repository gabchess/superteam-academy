type LeaderboardEntry = {
  rank: number;
  username: string;
  xp: number;
  level: number;
  streak: number;
};

type LeaderboardTableProps = {
  entries: LeaderboardEntry[];
  labels: {
    rank: string;
    user: string;
    xp: string;
    level: string;
    streak: string;
  };
};

export function LeaderboardTable({ entries, labels }: LeaderboardTableProps): JSX.Element {
  return (
    <div className="overflow-hidden rounded-md border">
      <table className="w-full text-sm">
        <thead className="bg-muted/40 text-left">
          <tr>
            <th className="px-3 py-2">{labels.rank}</th>
            <th className="px-3 py-2">{labels.user}</th>
            <th className="px-3 py-2">{labels.xp}</th>
            <th className="px-3 py-2">{labels.level}</th>
            <th className="px-3 py-2">{labels.streak}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.username} className="border-t">
              <td className="px-3 py-2">{entry.rank}</td>
              <td className="px-3 py-2">{entry.username}</td>
              <td className="px-3 py-2">{entry.xp}</td>
              <td className="px-3 py-2">{entry.level}</td>
              <td className="px-3 py-2">{entry.streak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
