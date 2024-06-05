/*
  Warnings:

  - You are about to drop the `onRampTransanction` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OnRampStatus" AS ENUM ('Success', 'Failure', 'Processing');

-- DropForeignKey
ALTER TABLE "onRampTransanction" DROP CONSTRAINT "onRampTransanction_userId_fkey";

-- DropTable
DROP TABLE "onRampTransanction";

-- DropEnum
DROP TYPE "onRampStatus";

-- CreateTable
CREATE TABLE "OnRampTransanction" (
    "id" SERIAL NOT NULL,
    "status" "OnRampStatus" NOT NULL,
    "token" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OnRampTransanction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTransanction_token_key" ON "OnRampTransanction"("token");

-- AddForeignKey
ALTER TABLE "OnRampTransanction" ADD CONSTRAINT "OnRampTransanction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
