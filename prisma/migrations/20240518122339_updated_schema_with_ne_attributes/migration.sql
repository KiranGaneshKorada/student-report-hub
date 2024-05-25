/*
  Warnings:

  - Added the required column `category` to the `Complaint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Complaint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urgency` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Urgency" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CLASSROOM', 'LABORATORY', 'RESTROOMS', 'LIBRARY', 'CAFETERIA', 'OUTDOOR', 'TRANSPORT', 'HALLS');

-- AlterTable
ALTER TABLE "Complaint" ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "urgency" "Urgency" NOT NULL;
