import React from "react";
import {
   Table,
   TableHeader,
   TableBody,
   TableRow,
   TableHead,
   TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Team = {
   position: number;
   name: string;
   played: number;
   wins: number;
   draws: number;
   losses: number;
   goalsFor: number;
   goalsAgainst: number;
   points: number;
};
const teams: Team[] = [
   {
      position: 1,
      name: "FC Dinamo",
      played: 24,
      wins: 18,
      draws: 3,
      losses: 3,
      goalsFor: 50,
      goalsAgainst: 20,
      points: 57,
   },
   {
      position: 2,
      name: "United Eagles",
      played: 24,
      wins: 16,
      draws: 4,
      losses: 4,
      goalsFor: 45,
      goalsAgainst: 25,
      points: 52,
   },
   {
      position: 3,
      name: "Balde Warriors",
      played: 24,
      wins: 14,
      draws: 5,
      losses: 5,
      goalsFor: 40,
      goalsAgainst: 22,
      points: 47,
   },
   {
      position: 4,
      name: "Storm Breakers",
      played: 24,
      wins: 13,
      draws: 6,
      losses: 5,
      goalsFor: 38,
      goalsAgainst: 27,
      points: 45,
   },
   {
      position: 5,
      name: "Iron Titans",
      played: 24,
      wins: 12,
      draws: 5,
      losses: 7,
      goalsFor: 36,
      goalsAgainst: 30,
      points: 41,
   },
   {
      position: 6,
      name: "Crimson Hawks",
      played: 24,
      wins: 11,
      draws: 6,
      losses: 7,
      goalsFor: 34,
      goalsAgainst: 28,
      points: 39,
   },
   {
      position: 7,
      name: "Shadow Wolves",
      played: 24,
      wins: 10,
      draws: 4,
      losses: 10,
      goalsFor: 30,
      goalsAgainst: 30,
      points: 34,
   },
   {
      position: 8,
      name: "Golden Lions",
      played: 24,
      wins: 8,
      draws: 6,
      losses: 10,
      goalsFor: 29,
      goalsAgainst: 33,
      points: 30,
   },
   {
      position: 9,
      name: "Blue Falcons",
      played: 24,
      wins: 6,
      draws: 5,
      losses: 13,
      goalsFor: 25,
      goalsAgainst: 40,
      points: 23,
   },
   {
      position: 10,
      name: "Rapid Rangers",
      played: 24,
      wins: 4,
      draws: 3,
      losses: 17,
      goalsFor: 20,
      goalsAgainst: 50,
      points: 15,
   },
];

const Page = () => {
   return (
      <div className="bg-[#0f2145] py-14">
         <div className="custom-container shadow-md py-10 rounded-xl bg-white">
            <div className="flex max-sm:flex-col items-center justify-between gap-3">
               <h2 className="text-3xl max-md:text-2xl max-sm:text-xl max-sm:text-center font-bold uppercase">
                  Standings
               </h2>

               <div className="text-end max-sm:text-center">
                  <p className="text-[10px] font-semibold uppercase text-gray-600">
                     last updated: 02:5AM Wednesday 02 jul 2025
                  </p>
                  <p className="text-lg max-md:text-base font-bold">2025/2026 Season</p>
               </div>
            </div>
            <div className="mt-10">
               <Table className="min-w-lg w-full">
                  <TableHeader className="">
                     <TableRow>
                        <TableHead className=""></TableHead>
                        <TableHead className="text-xs font-bold">
                           Position
                        </TableHead>
                        <TableHead className="text-xs font-bold">
                           Team
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center">
                           P
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center">
                           W
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center">
                           D
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center">
                           L
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center">
                           GF
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center">
                           GA
                        </TableHead>
                        <TableHead className="text-xs font-bold text-center text-[#fdc52c]">
                           PTS
                        </TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {teams.map((team) => {
                        const isDynamo = team.name === "FC Dinamo";

                        const sideLineColor =
                           team.position <= 4
                              ? "before:bg-blue-600"
                              : team.position <= 6
                              ? "before:bg-yellow-400"
                              : team.position >= 8
                              ? "before:bg-red-500"
                              : "";

                        return (
                           <TableRow
                              key={team.name}
                              className={cn(
                                 "even:bg-gray-50 relative",
                                 isDynamo &&
                                    "bg-gradient-to-r from-yellow-500 to-[#0474D8] text-white",
                                 "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1",
                                 sideLineColor
                              )}
                           >
                              <TableCell className="font-bold text-2xl max-md:text-xl max-sm:text-center">
                                 {team.position}
                              </TableCell>
                              <TableCell className="flex items-center gap-10 max-md:gap-3 font-semibold text-center">
                                 <Image
                                    src={"/logo.png"}
                                    width={40}
                                    height={40}
                                    alt={"dinamo"}
                                 />
                                 {team.name}
                              </TableCell>
                              <TableCell className="text-center font-semibold">
                                 {team.played}
                              </TableCell>
                              <TableCell className="text-center">
                                 {team.wins}
                              </TableCell>
                              <TableCell className="text-center">
                                 {team.draws}
                              </TableCell>
                              <TableCell className="text-center">
                                 {team.losses}
                              </TableCell>
                              <TableCell className="text-center">
                                 {team.goalsFor}
                              </TableCell>
                              <TableCell className="text-center">
                                 {team.goalsAgainst}
                              </TableCell>
                              <TableCell className="text-center font-bold text-[#fdc52c]">
                                 {team.points}
                              </TableCell>
                           </TableRow>
                        );
                     })}
                  </TableBody>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default Page;
