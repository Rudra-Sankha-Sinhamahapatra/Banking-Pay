/*
  Warnings:

  - You are about to drop the `OnRampTransanction` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "onRampStatus" AS ENUM ('Success', 'Failure', 'Processing');

-- DropForeignKey
ALTER TABLE "OnRampTransanction" DROP CONSTRAINT "OnRampTransanction_userId_fkey";

-- DropTable
DROP TABLE "OnRampTransanction";

-- DropEnum
DROP TYPE "OnRampStatus";

-- CreateTable
CREATE TABLE "onRampTransanction" (
    "id" SERIAL NOT NULL,
    "status" "onRampStatus" NOT NULL,
    "token" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "onRampTransanction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onRampTransanction_token_key" ON "onRampTransanction"("token");

-- AddForeignKey
ALTER TABLE "onRampTransanction" ADD CONSTRAINT "onRampTransanction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
