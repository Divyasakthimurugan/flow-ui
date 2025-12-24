"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createOrder } from "@/app/actions/orders";

export default function CreateOrderForm() {
  return (
    <form action={createOrder} className="space-y-4">
      <Input name="name" placeholder="Customer name" required />
      <Input name="country" placeholder="Country" required />

      <Button type="submit" className="w-full">
        Create Order
      </Button>
    </form>
  );
}
