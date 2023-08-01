/*
  Warnings:

  - You are about to drop the `RoomUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RoomUsers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Session_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
