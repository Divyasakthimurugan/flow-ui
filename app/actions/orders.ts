"use server";

import { db } from "@/db";
import { customers, orders } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createOrder(formData: FormData) {
  const name = formData.get("name") as string;
  const country = formData.get("country") as string;

  const [customer] = await db
    .insert(customers)
    .values({ name, country })
    .returning();

  await db.insert(orders).values({
    customerId: customer.id,
    status: "Order confirmed",
    total: 0,
  });

  redirect("/orders");
}
