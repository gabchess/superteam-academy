"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeaderboardTable } from "@/components/gamification/LeaderboardTable";
import { useI18n } from "@/lib/i18n/provider";

type Timeframe = "weekly" | "monthly" | "alltime";

const boardData: Record<Timeframe, Array<{ rank: number; username: string; xp: number; level: number; streak: number }>> = {
  weekly: [
    { rank: 1, username: "ana", xp: 540, level: 2, streak: 6 },
    { rank: 2, username: "bruno", xp: 490, level: 2, streak: 4 },
    { rank: 3, username: "carla", xp: 460, level: 2, streak: 5 }
  ],
  monthly: [
    { rank: 1, username: "ana", xp: 2100, level: 4, streak: 17 },
    { rank: 2, username: "davi", xp: 1860, level: 4, streak: 13 },
    { rank: 3, username: "bruno", xp: 1650, level: 4, streak: 9 }
  ],
  alltime: [
    { rank: 1, username: "ana", xp: 8600, level: 9, streak: 31 },
    { rank: 2, username: "carla", xp: 8120, level: 9, streak: 24 },
    { rank: 3, username: "davi", xp: 7800, level: 8, streak: 27 }
  ]
};

export default function LeaderboardPage(): JSX.Element {
  const { t } = useI18n();
  const [timeframe, setTimeframe] = useState<Timeframe>("weekly");

  const entries = useMemo(() => boardData[timeframe], [timeframe]);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>{t("leaderboard.title")}</CardTitle>
          <CardDescription>{t("leaderboard.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button variant={timeframe === "weekly" ? "default" : "outline"} onClick={() => setTimeframe("weekly")}>
              {t("leaderboard.weekly")}
            </Button>
            <Button variant={timeframe === "monthly" ? "default" : "outline"} onClick={() => setTimeframe("monthly")}>
              {t("leaderboard.monthly")}
            </Button>
            <Button variant={timeframe === "alltime" ? "default" : "outline"} onClick={() => setTimeframe("alltime")}>
              {t("leaderboard.alltime")}
            </Button>
          </div>
          <LeaderboardTable
            entries={entries}
            labels={{
              rank: "#",
              user: t("common.user"),
              xp: t("common.xp"),
              level: t("common.level"),
              streak: t("common.streak")
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
