export default function User() {
  const invoices = [
    { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
    { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
    { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
    { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
    { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Unpaid":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const total = invoices.reduce((sum, item) => {
    return sum + Number(item.totalAmount.replace(/[^0-9.-]+/g, ""));
  }, 0);

  return (
    <div className="overflow-x-auto w-full bg-white shadow-lg rounded-lg">
      <table className="min-w-[600px] text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Invoice</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Method</th>
            <th className="px-6 py-3 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.invoice}
              className="border-b hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 font-medium">{invoice.invoice}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    invoice.paymentStatus
                  )}`}
                >
                  {invoice.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4">{invoice.paymentMethod}</td>
              <td className="px-6 py-4 text-right">{invoice.totalAmount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-50 font-semibold">
          <tr>
            <td className="px-6 py-3" colSpan={3}>
              Total
            </td>
            <td className="px-6 py-3 text-right">${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
