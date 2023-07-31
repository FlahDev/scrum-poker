/*
  Warnings:

  - A unique constraint covering the columns `[hash]` on the table `Room` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Room_hash_key" ON "Room"("hash");
