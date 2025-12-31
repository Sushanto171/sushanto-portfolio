/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Lock } from "lucide-react";
import { CopyButton } from "./CopyButton";

const CODE_STRING = `import { Passion, Skill } from './life';

const Sushanto = () => {
  const stack = ['React', 'NextJS', 'Node', 'Postgress', 'MongoDB'];
  const mission = 'Crafting digital excellence';

  return (
    <Developer
      hardWorker={true}
      problemSolver={true}
      hireable={() => 'Definitely!'}
    />
  );
};`;

export default function PortfolioCodeCard() {
  return (
    <div className="flex items-center justify-center  ">
      <Card className="w-full  bg-slate-900 border-slate-800 shadow-2xl gap-0">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <span className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
            </div>

            <div className="h-4 w-px bg-slate-800" />

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <Lock className="h-3 w-3" />
              <span>sushanto_portfolio.tsx</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className="bg-slate-800 text-slate-400 border border-slate-700 font-mono text-[10px]"
            >
              private
            </Badge>

            {/* Client Island */}
            <CopyButton code={CODE_STRING} />
          </div>
        </CardHeader>

        {/* Code Body */}
        <CardContent className="py-0">
          <ScrollArea className="w-full">
            <div className="flex">
              <div className="hidden sm:block select-none border-r border-slate-800 bg-slate-900/30 px-4 py-0 pt-1 text-right font-mono text-xs leading-relaxed text-slate-600">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className="mt-[7.5px]">{i + 1}</div>
                ))}
              </div>


              <pre className="px-6 sm:px-8 py-2 font-mono text-sm sm:text-base leading-snug  text-slate-300">
                <code className="space-y-1">
                  <div>
                    <span className="text-purple-400">import</span>{" "}
                    {"{ "}
                    <span className="text-amber-300">Passion</span>,{" "}
                    <span className="text-amber-300">Skill</span>
                    {" } "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-emerald-400">'./life'</span>;
                  </div>

                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-400">Sushanto</span> = (){" "}
                    <span className="text-purple-400">=&gt;</span> {"{"}
                  </div>

                  <div className="pl-6">
                    <span className="text-purple-400">const</span> stack = [
                    <span className="pl-1 text-emerald-400">'React',</span>
                    <span className="pl-1 text-emerald-400">'NextJS',</span>
                    <span className="pl-1 text-emerald-400">'Node'</span>
                    <span className="pl-1 text-emerald-400">'Postgess'</span>
                    <span className="pl-1 text-emerald-400">'MongoDB'</span>
                    ];
                  </div>

                  <div className="pl-6">
                    <span className="text-purple-400">const</span> mission ={" "}
                    <span className="text-emerald-400">
                      &apos;Crafting digital excellence&apos;
                    </span>
                    ;
                  </div>

                  <div className="pl-6 mt-2">
                    <span className="text-purple-400">return</span> (
                  </div>

                  <div className="pl-10 text-rose-400">&lt;Developer</div>

                  <div className="pl-14">
                    <div className="mt-1.5">
                      <span className="text-amber-300">hardWorker</span>
                      ={"{"}
                      <span className="text-sky-400">true</span>
                      {"}"}
                    </div>
                    <div className="mt-1.5">
                      <span className="text-amber-300">problemSolver</span>
                      ={"{"}
                      <span className="text-sky-400">true</span>
                      {"}"}
                    </div>
                    <div className="mt-1.5">
                      <span className="text-amber-300">hireable</span>
                      ={"{() => "}
                      <span className="text-emerald-400">&apos;Definitely!&apos;</span>
                      {"}"}
                    </div>
                  </div>

                  <div className="pl-10 text-rose-400">/&gt;</div>

                  <div className="pl-6">);</div>
                  <div>{"}"}</div>
                </code>
              </pre>

            </div>
          </ScrollArea>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex items-center gap-4 border-t border-slate-800 bg-slate-900/50 px-4 py-2 text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Ready
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            UTF-8
          </div>

          <div className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            TypeScript JSX
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
