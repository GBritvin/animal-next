/*
  Warnings:

  - You are about to drop the column `groupId` on the `Animal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_groupId_fkey";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "groupId";
