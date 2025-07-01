/*
  Warnings:

  - You are about to drop the column `score` on the `Match` table. All the data in the column will be lost.
  - Added the required column `awayTeamScore` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeTeamScore` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coach" ADD COLUMN     "coachImage" TEXT;

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "score",
ADD COLUMN     "awayTeamLogo" TEXT,
ADD COLUMN     "awayTeamScore" INTEGER NOT NULL,
ADD COLUMN     "homeTeamLogo" TEXT,
ADD COLUMN     "homeTeamScore" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PastMatch" ADD COLUMN     "opponentLogo" TEXT;

-- AlterTable
ALTER TABLE "UpcomingMatch" ADD COLUMN     "opponentLogo" TEXT;
