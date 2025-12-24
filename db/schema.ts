import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customer: varchar("customer", { length: 100 }),
  country: varchar("country", { length: 50 }),
  total: integer("total"),
  status: varchar("status", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow(),
});
