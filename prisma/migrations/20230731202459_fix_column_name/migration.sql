/*
  Warnings:

  - You are about to drop the column `isAcitve` on the `Room` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    CONSTRAINT "Room_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Room" ("createdAt", "createdById", "hash", "id", "name") SELECT "createdAt", "createdById", "hash", "id", "name" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_hash_key" ON "Room"("hash");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
