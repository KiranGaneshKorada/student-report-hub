/*
  Warnings:

  - You are about to drop the column `userId` on the `Complaint` table. All the data in the column will be lost.
  - Added the required column `userEmailId` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_userId_fkey";

-- AlterTable
ALTER TABLE "Complaint" DROP COLUMN "userId",
ADD COLUMN     "userEmailId" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_userEmailId_fkey" FOREIGN KEY ("userEmailId") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
