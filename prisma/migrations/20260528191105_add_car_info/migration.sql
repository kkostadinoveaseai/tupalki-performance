/*
  Warnings:

  - Added the required column `carInfo` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "carInfo" TEXT NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;
