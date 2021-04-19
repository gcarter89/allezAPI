-- CreateTable
CREATE TABLE "Rider" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nationality" VARCHAR(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "gcWinnerId" INTEGER,
    "komWinnerId" INTEGER,
    "pointsWinnerId" INTEGER,
    "intSprintWinnerId" INTEGER,
    "youngRiderWinnerId" INTEGER,
    "combinationWinnerId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tour.year_unique" ON "Tour"("year");

-- AddForeignKey
ALTER TABLE "Tour" ADD FOREIGN KEY ("gcWinnerId") REFERENCES "Rider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD FOREIGN KEY ("komWinnerId") REFERENCES "Rider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD FOREIGN KEY ("pointsWinnerId") REFERENCES "Rider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD FOREIGN KEY ("intSprintWinnerId") REFERENCES "Rider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD FOREIGN KEY ("youngRiderWinnerId") REFERENCES "Rider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD FOREIGN KEY ("combinationWinnerId") REFERENCES "Rider"("id") ON DELETE SET NULL ON UPDATE CASCADE;
