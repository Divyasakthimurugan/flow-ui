import { db } from "@/db";
import { orders } from "@/db/schema";
import { and, ilike, eq } from "drizzle-orm";

export async function getOrders({
  page,
  pageSize,
  search,
  status,
  country,
}: {
  page: number;
  pageSize: number;
  search?: string;
  status?: string;
  country?: string;
}) {
  const filters = [];

  if (search)
    filters.push(ilike(orders.customer, `%${search}%`));
  if (status && status !== "all")
    filters.push(eq(orders.status, status));
  if (country)
    filters.push(ilike(orders.country, `%${country}%`));

  const data = await db
    .select()
    .from(orders)
    .where(and(...filters))
    .limit(pageSize)
    .offset((page - 1) * pageSize);

  return data;
}
