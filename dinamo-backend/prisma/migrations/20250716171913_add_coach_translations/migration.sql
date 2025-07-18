/*
  Warnings:

  - You are about to drop the column `firstName` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `author` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `awayTeam` on the `CurrentMatch` table. All the data in the column will be lost.
  - You are about to drop the column `homeTeam` on the `CurrentMatch` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `opponent` on the `PastMatch` table. All the data in the column will be lost.
  - You are about to drop the column `stadium` on the `PastMatch` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `opponent` on the `UpcomingMatch` table. All the data in the column will be lost.
  - You are about to drop the column `stadium` on the `UpcomingMatch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "nationality";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "author",
DROP COLUMN "content";

-- AlterTable
ALTER TABLE "CurrentMatch" DROP COLUMN "awayTeam",
DROP COLUMN "homeTeam";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "content",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "PastMatch" DROP COLUMN "opponent",
DROP COLUMN "stadium";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "nationality",
DROP COLUMN "position";

-- AlterTable
ALTER TABLE "UpcomingMatch" DROP COLUMN "opponent",
DROP COLUMN "stadium";

-- CreateTable
CREATE TABLE "CurrentMatchTranslation" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "matchId" INTEGER NOT NULL,

    CONSTRAINT "CurrentMatchTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerTranslation" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "PlayerTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpcomingMatchTranslation" (
    "id" SERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "opponent" TEXT NOT NULL,
    "stadium" TEXT NOT NULL,
    "upcomingMatchId" INTEGER NOT NULL,

    CONSTRAINT "UpcomingMatchTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsTranslation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "newsId" INTEGER NOT NULL,

    CONSTRAINT "NewsTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentTranslation" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "CommentTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastMatchTranslation" (
    "id" SERIAL NOT NULL,
    "opponent" TEXT NOT NULL,
    "stadium" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "pastMatchId" INTEGER NOT NULL,

    CONSTRAINT "PastMatchTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoachTranslation" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "coachId" INTEGER NOT NULL,

    CONSTRAINT "CoachTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CurrentMatchTranslation_matchId_locale_key" ON "CurrentMatchTranslation"("matchId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerTranslation_playerId_locale_key" ON "PlayerTranslation"("playerId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "UpcomingMatchTranslation_upcomingMatchId_locale_key" ON "UpcomingMatchTranslation"("upcomingMatchId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "NewsTranslation_newsId_locale_key" ON "NewsTranslation"("newsId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "CommentTranslation_commentId_locale_key" ON "CommentTranslation"("commentId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "PastMatchTranslation_pastMatchId_locale_key" ON "PastMatchTranslation"("pastMatchId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "CoachTranslation_coachId_locale_key" ON "CoachTranslation"("coachId", "locale");

-- AddForeignKey
ALTER TABLE "CurrentMatchTranslation" ADD CONSTRAINT "CurrentMatchTranslation_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "CurrentMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTranslation" ADD CONSTRAINT "PlayerTranslation_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpcomingMatchTranslation" ADD CONSTRAINT "UpcomingMatchTranslation_upcomingMatchId_fkey" FOREIGN KEY ("upcomingMatchId") REFERENCES "UpcomingMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTranslation" ADD CONSTRAINT "NewsTranslation_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentTranslation" ADD CONSTRAINT "CommentTranslation_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastMatchTranslation" ADD CONSTRAINT "PastMatchTranslation_pastMatchId_fkey" FOREIGN KEY ("pastMatchId") REFERENCES "PastMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoachTranslation" ADD CONSTRAINT "CoachTranslation_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE CASCADE ON UPDATE CASCADE;
