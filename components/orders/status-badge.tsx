export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    "Order placed": "bg-gray-100 text-gray-700",
    "Payment confirmed": "bg-blue-100 text-blue-700",
    Shipped: "bg-yellow-100 text-yellow-700",
    "Order delivered": "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        colors[status]
      }`}
    >
      {status}
    </span>
  );
}
