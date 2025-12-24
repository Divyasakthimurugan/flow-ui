"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type OrdersHeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  activeFilters: number;
  onFiltersClick: () => void;
};

export default function OrdersHeader({
  search,
  setSearch,
  activeFilters,
  onFiltersClick,
}: OrdersHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-semibold">Orders</h1>

      <div className="flex gap-2">
        <Input
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="outline" onClick={onFiltersClick}>
          Filters {activeFilters > 0 && `(${activeFilters})`}
        </Button>

        <Button onClick={() => router.push("/orders/create")}>
          + Create
        </Button>
      </div>
    </div>
  );
}
