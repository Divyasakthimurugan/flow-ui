import CreateOrderForm from "@/components/orders/create-order-form";

export default function CreateOrderPage() {
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Create Order</h2>
      <CreateOrderForm />
    </div>
  );
}
