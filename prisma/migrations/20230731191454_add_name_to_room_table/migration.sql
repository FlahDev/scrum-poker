/*
  Warnings:

  - Added the required column `name` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" INTEGER NOT NULL,
    "isAcitve" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    CONSTRAINT "Room_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Room" ("createdAt", "createdById", "hash", "id", "isAcitve") SELECT "createdAt", "createdById", "hash", "id", "isAcitve" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
