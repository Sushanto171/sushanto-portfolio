/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getGitHubContributions } from "@/service/home/home.service";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const LEGEND_COLORS = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

export default async function GithubContributionsSection() {
  const { data, error } = await getGitHubContributions();

  if (error) {
    return (
      <Card className="border-destructive/50 bg-destructive/10">
        <CardContent className="p-4 text-sm text-destructive">
          Failed to load GitHub activity: {error}
        </CardContent>
      </Card>
    );
  }
  if (!data) return null;

  return (
    <section className="w-full mt-18">
      <Card className="w-full">
        {/* Header */}
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold">
           Github Contribution: {data.totalContributions.toLocaleString()} contributions in the last year
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Scroll Container */}
          <div className="overflow-x-auto ">
            <div className="min-w-max">
              <div className="flex gap-3 w-full">
                {/* Weekday Labels */}
                <div className="flex flex-col gap-[6px] pt-[22px] text-xs text-muted-foreground">
                  <span>Mon</span>
                  <span className="invisible">Tue</span>
                  <span>Wed</span>
                  <span className="invisible">Thu</span>
                  <span>Fri</span>
                  <span className="invisible">Sat</span>
                  <span className="invisible">Sun</span>
                </div>

                {/* Heatmap */}
                <div className="w-full">
                  {/* Month Labels */}
                  <div className="mb-1 flex justify-evenly">
                    {data.months.map((month: any, index: any) => {
                      // Each month has totalWeeks, multiply by single week width (14px)
                      return (
                        <div
                          key={index}
                          className="text-xs text-muted-foreground"
                          style={{ width: month.totalWeeks * 14 }}
                        >
                          {month.name}
                        </div>
                      );
                    })}
                  </div>


                  {/* Contribution Grid */}
                  <div className="flex gap-[4px] w-full">
                    {data.weeks.map((week: any, weekIndex: number) => (
                      <div
                        key={weekIndex}
                        className="flex flex-col gap-[4px]"
                      >
                        {week.contributionDays.map(
                          (day: any, dayIndex: number) => (
                            <>
                              <Tooltip key={dayIndex}>
                                <TooltipTrigger asChild>
                                  <div
                                    className="h-[16px] w-[16px] rounded-[2px] cursor-pointer"
                                    style={{
                                      backgroundColor:
                                        day.contributionCount === 0 ? "#161b22" : day.color,
                                    }}
                                  />
                                </TooltipTrigger>
                                <TooltipContent className="text-xs">
                                  {day.contributionCount} contribution{day.contributionCount !== 1 ? "s" : ""} on {day.date}
                                </TooltipContent>
                              </Tooltip>
                            </>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-[4px]">
              {LEGEND_COLORS.map((color) => (
                <div
                  key={color}
                  className="h-[10px] w-[10px] rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
