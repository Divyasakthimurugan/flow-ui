"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FiltersDrawer({
  open,
  onClose,
  filters,
  setFilters,
}: any) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 mt-6">
          <Input
            placeholder="Customer name"
            value={filters.customer}
            onChange={e =>
              setFilters({ ...filters, customer: e.target.value })
            }
          />

          <Input
            placeholder="Country"
            value={filters.country}
            onChange={e =>
              setFilters({ ...filters, country: e.target.value })
            }
          />

          <Select
            value={filters.status}
            onValueChange={v =>
              setFilters({ ...filters, status: v })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Order placed">Order placed</SelectItem>
              <SelectItem value="Payment confirmed">Payment confirmed</SelectItem>
              <SelectItem value="Shipped">Shipped</SelectItem>
              <SelectItem value="Order delivered">Order delivered</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() =>
                setFilters({ customer: "", country: "", status: "all" })
              }
            >
              Reset
            </Button>
            <Button onClick={onClose}>Done</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
