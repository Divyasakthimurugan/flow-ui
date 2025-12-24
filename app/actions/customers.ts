"use server";

import { db } from "@/db";
import { customers } from "@/db/schema";

export async function createCustomer(name: string, country: string) {
  await db.insert(customers).values({
    name,
    country,
  });
}
