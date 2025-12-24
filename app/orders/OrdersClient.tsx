"use client";

import { useState } from "react";
import OrdersHeader from "@/components/orders/orders-header";
import OrdersTable from "@/components/orders/orders-table";
import { FiltersDrawer } from "@/components/orders/filters-drawer";

export default function OrdersClient() {
  const [filters, setFilters] = useState({
    customer: "",
    status: "all",
    country: "",
  });

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Count of active filters (ignore "all")
  const activeFilters = Object.values(filters).filter(
    (f) => f && f !== "all"
  ).length;

  const applyFilters = () => {
    console.log("Filters applied:", filters);
    // TODO: Connect to DB query later
  };

  return (
    <div className="relative">
      {/* Header with Filters + Create button */}
      <OrdersHeader
        activeFilters={activeFilters}
        onFiltersClick={() => setIsFiltersOpen(true)}
      />

      {/* Filters modal */}
      {isFiltersOpen && (
        <FiltersDrawer
          filters={filters}
          setFilters={setFilters}
          onClose={() => setIsFiltersOpen(false)}
          onApply={applyFilters}
        />
      )}

      {/* Orders Table */}
      <OrdersTable />
    </div>
  );
}
