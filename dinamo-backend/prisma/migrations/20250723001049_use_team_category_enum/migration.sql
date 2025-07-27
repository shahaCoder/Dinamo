-- CreateEnum
CREATE TYPE "TeamCategory" AS ENUM ('U19', 'U21', 'MAIN');

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "teamCategory" "TeamCategory" NOT NULL DEFAULT 'MAIN';
