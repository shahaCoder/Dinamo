-- AlterTable
ALTER TABLE "PastMatch" ADD COLUMN     "attendance" INTEGER,
ADD COLUMN     "tourNumber" INTEGER;

-- AlterTable
ALTER TABLE "PastMatchTranslation" ADD COLUMN     "league" TEXT,
ADD COLUMN     "referee" TEXT;

-- CreateTable
CREATE TABLE "PastMatchEvent" (
    "id" SERIAL NOT NULL,
    "pastMatchId" INTEGER NOT NULL,
    "minute" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "PastMatchEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PastMatchEvent" ADD CONSTRAINT "PastMatchEvent_pastMatchId_fkey" FOREIGN KEY ("pastMatchId") REFERENCES "PastMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;
