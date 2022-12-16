/*
  Warnings:

  - A unique constraint covering the columns `[address_id]` on the table `geo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "geo_address_id_key" ON "geo"("address_id");
