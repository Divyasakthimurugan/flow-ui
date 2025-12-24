"use server";

import { db } from "@/db";
import { orders } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createOrder(formData: FormData) {
  const customer = formData.get("customer") as string;
  const country = formData.get("country") as string;

  if (!customer || !country) return;

  await db.insert(orders).values({
    customer,
    country,
    status: "Payment confirmed",
    total: 0,
  });

  redirect("/orders");
}
