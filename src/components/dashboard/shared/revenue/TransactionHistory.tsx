"use client";

import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  name: string;
  method: "Visa" | "Mastercard" | "Paypal";
  date: string;
  amount: string;
  status: "Pending" | "Complete" | "Canceled";
}

const transactions: Transaction[] = [
  { id: "1", name: "Visa Withdrawal", method: "Visa", date: "Jan 24, 2025", amount: "$942.50", status: "Pending" },
  { id: "2", name: "Visa Withdrawal", method: "Visa", date: "Mar 18, 2025", amount: "$581.00", status: "Complete" },
  { id: "3", name: "Mastercard Top-up", method: "Mastercard", date: "Nov 10, 2025", amount: "$409.00", status: "Pending" },
  { id: "4", name: "Paypal Transfer", method: "Paypal", date: "Dec 20, 2025", amount: "$153.20", status: "Canceled" },
  { id: "5", name: "Visa Withdrawal", method: "Visa", date: "Jul 25, 2025", amount: "$997.00", status: "Canceled" },
];

export function TransactionHistory() {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Complete": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Pending": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Canceled": return "bg-rose-500/10 text-rose-500 border-rose-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border/50">
              <th className="py-4 px-4 text-left font-semibold text-sm text-muted-foreground">ID</th>
              <th className="py-4 px-4 text-left font-semibold text-sm text-muted-foreground">Name</th>
              <th className="py-4 px-4 text-left font-semibold text-sm text-muted-foreground">Method</th>
              <th className="py-4 px-4 text-left font-semibold text-sm text-muted-foreground">Date</th>
              <th className="py-4 px-4 text-left font-semibold text-sm text-muted-foreground">Amount</th>
              <th className="py-4 px-4 text-center font-semibold text-sm text-muted-foreground">Status</th>
              <th className="py-4 px-4 text-right font-semibold text-sm text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {transactions.map((t) => (
              <tr key={t.id} className="group hover:bg-accent/5 transition-colors">
                <td className="py-5 px-4">
                  <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {t.id.padStart(2, '0')}
                  </span>
                </td>
                
                <td className="py-5 px-4 font-bold text-sm text-foreground">
                  {t.name}
                </td>

                <td className="py-5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-auto h-5 rounded bg-muted/30 flex items-center justify-center border border-border/50">
                       <span className="text-[8px] font-black italic">{t.method.toUpperCase()}</span>
                    </div>
                    {/* <span className="text-xs text-muted-foreground">{t.method}</span> */}
                  </div>
                </td>

                <td className="py-5 px-4 text-sm text-muted-foreground">
                  {t.date}
                </td>

                <td className="py-5 px-4">
                  <span className={cn(
                    "font-black text-sm",
                    t.name.includes("Withdrawal") ? "text-rose-500" : "text-emerald-500"
                  )}>
                    {t.name.includes("Withdrawal") ? "-" : "+"}{t.amount}
                  </span>
                </td>

                <td className="py-5 px-4">
                  <div className="flex justify-center">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-tighter",
                      getStatusStyles(t.status)
                    )}>
                      {t.status}
                    </span>
                  </div>
                </td>

                <td className="py-5 px-4 text-right">
                  <CustomButton variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                    <MoreHorizontal size={16} className="text-muted-foreground" />
                  </CustomButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}