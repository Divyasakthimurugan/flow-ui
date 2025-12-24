"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { columns, Order } from "./columns";
import TablePagination from "./table-pagination";

const data: Order[] = [
  {
    id: 1,
    date: "12 Sep 2025",
    customer: "Divya",
    country: "India",
    total: 4500,
    status: "Payment confirmed",
  },
  {
    id: 2,
    date: "13 Sep 2025",
    customer: "Arjun",
    country: "USA",
    total: 2300,
    status: "Order placed",
  },
  {
    id: 3,
    date: "14 Sep 2025",
    customer: "Kumar",
    country: "India",
    total: 6200,
    status: "Shipped",
  },
  {
    id: 4,
    date: "15 Sep 2025",
    customer: "Sita",
    country: "UK",
    total: 5100,
    status: "Order delivered",
  },
  {
    id: 5,
    date: "15 Sep 2025",
    customer: "Raj",
    country: "England",
    total: 6500,
    status: "Shipped",
  },
  {
    id: 6,
    date: "15 Sep 2025",
    customer: "Geetha",
    country: "India",
    total: 9500,
    status: "Order delivered",
  },
  {
    id: 7,
    date: "15 Sep 2025",
    customer: "Alex",
    country: "",
    total: 5100,
    status: "Order delivered",
  },
];

export default function OrdersTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  return (
    <div className="rounded-md border bg-white">
      <table className="w-full text-sm">
        <thead className="bg-muted border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-3 text-left">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Pagination component */}
      <TablePagination table={table} />
    </div>
  );
}
