/*
  Warnings:

  - You are about to drop the column `name` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Reproductionstatus" AS ENUM ('PREGNANT', 'NONPREGNANT');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ALIVE', 'DEAD');

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "name",
DROP COLUMN "weight",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD COLUMN     "reproductionStatus" "Reproductionstatus" NOT NULL DEFAULT 'NONPREGNANT',
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ALIVE';

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaxList" (
    "id" SERIAL NOT NULL,
    "vaxname" TEXT NOT NULL,

    CONSTRAINT "VaxList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weight" (
    "id" SERIAL NOT NULL,
    "dateofweight" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentWeight" DOUBLE PRECISION NOT NULL,
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "Weight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaccine" (
    "id" SERIAL NOT NULL,
    "dateofvax" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animalId" INTEGER NOT NULL,
    "vaxListId" INTEGER NOT NULL,

    CONSTRAINT "Vaccine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reproduction" (
    "id" SERIAL NOT NULL,
    "dateofrep" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animalId" INTEGER NOT NULL,
    "sire" TEXT,

    CONSTRAINT "Reproduction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_vaxListId_fkey" FOREIGN KEY ("vaxListId") REFERENCES "VaxList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reproduction" ADD CONSTRAINT "Reproduction_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
