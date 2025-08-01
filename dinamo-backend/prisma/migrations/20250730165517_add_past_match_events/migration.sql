/*
  Warnings:

  - You are about to drop the column `player` on the `PastMatchEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PastMatchEvent" DROP COLUMN "player",
ADD COLUMN     "assistName" TEXT,
ADD COLUMN     "playerName" TEXT;
