/*
  Warnings:

  - You are about to drop the `Match` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Match";

-- CreateTable
CREATE TABLE "CurrentMatch" (
    "id" SERIAL NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "homeTeamLogo" TEXT,
    "awayTeam" TEXT NOT NULL,
    "awayTeamLogo" TEXT,
    "homeTeamScore" INTEGER NOT NULL,
    "awayTeamScore" INTEGER NOT NULL,
    "matchDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CurrentMatch_pkey" PRIMARY KEY ("id")
);
