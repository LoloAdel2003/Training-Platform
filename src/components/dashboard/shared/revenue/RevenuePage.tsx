// app/dashboard/revenue/page.tsx
// import { StatsOverview } from "@/components/dashboard/StatsOverview";
// import { ReportTable } from "@/components/dashboard/ReportTable"; // الجدول الذي طورناه
// import { DashboardState } from "@/components/dashboard/stats-card";
// import DashCard from "@/components/dashboard/DashCard";
import { 
  DollarSign, 
  Wallet, 
  ArrowDownCircle, 
  TrendingUp, 
  CreditCard, 
  Plus,
  MoreHorizontal
} from "lucide-react";
import { DashboardState } from "../DasboardState";
import { StatsOverview } from "../../admin/report/StatsCharts";
import DashCard from "../DasCard";
import { CustomButton } from "@/components/ui/CustomButton";
import { ReportTable } from "../../admin/report/ReportTable";
import { RevenueChart } from "../../admin/dashboard/RevenueChart";
import { TransactionHistory } from "./TransactionHistory";
// import { CustomButton } from "@/components/ui/CustomButton";

export default function RevenuePage() {
  return (
    <main className="space-y-6">
      {/* 1. Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardState 
          title="Total Revenue" 
          value="$13,804.00" 
          trend="12.5%" 
          icon={DollarSign} 
          color="oklch(0.62 0.17 25)" // Destructive/Reddish for revenue
        />
        <DashboardState 
          title="Current Balance" 
          value="$16,593.00" 
          trend="8.2%" 
          icon={Wallet} 
          color="var(--primary)" 
        />
        <DashboardState 
          title="Total Withdrawals" 
          value="$13,184.00" 
          trend="5.1%" 
          icon={ArrowDownCircle} 
          color="oklch(0.69 0.15 160)" 
        />
        <DashboardState 
          title="Today Revenue" 
          value="$162.00" 
          trend="2.4%" 
          icon={TrendingUp} 
          color="oklch(0.82 0.16 82)" 
        />
      </div>

      {/* 2. Middle Section: Chart & Wallet Management */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Revenue Chart Area */}
       <DashCard title="Revenue" className="lg:col-span-7">
             <RevenueChart />

          
        </DashCard>
        {/* My Cards & Wallet Section (From Image 2) */}
        <DashCard 
          title="My Cards" 
          className="lg:col-span-5"
          headerAction={<CustomButton variant="ghost" size="sm"><Plus size={16} /></CustomButton>}
        >
          <div className="space-y-6">
            {/* Visa Card UI */}
            <div className="radial-primary-bg p-6 rounded-[var(--radius)] text-white shadow-lg relative overflow-hidden group transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xl font-bold italic tracking-wider">VISA</span>
                <MoreHorizontal className="opacity-50" />
              </div>
              <div className="space-y-4">
                <p className="text-xl font-mono tracking-[0.2em]">4855 **** **** 1234</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] opacity-60 uppercase">Card Holder</p>
                    <p className="text-sm font-medium">Gemini AI Project</p>
                  </div>
                  <div>
                    <p className="text-[10px] opacity-60 uppercase">Expires</p>
                    <p className="text-sm font-medium">08/28</p>
                  </div>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </div>

            <CustomButton variant="outline" className="w-full border-dashed py-6 rounded-[var(--radius)]">
               <Plus className="mr-2" size={18} /> Add New Card
            </CustomButton>
          </div>
        </DashCard>
      </div>

      {/* 3. Bottom Section: Withdrawal History & Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Withdrawal Form (The empty area can be used for quick actions) */}
        <DashCard title="Quick Withdrawal" className="xl:col-span-1">
          <div className="space-y-4">
             <div className="p-4 rounded-xl border border-border bg-accent/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <CreditCard className="text-primary" />
                   <div>
                      <p className="text-sm font-bold">Visa **** 4855</p>
                      <p className="text-xs text-muted-foreground italic">Primary Account</p>
                   </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
             </div>
             
             <div className="pt-4 space-y-2">
                <p className="text-xs text-muted-foreground">Current Balance</p>
                <h4 className="text-2xl font-black">$16,593.00</h4>
             </div>

             <CustomButton variant="gradient" className="w-full py-6">
                Withdraw Money
             </CustomButton>
          </div>
        </DashCard>

        {/* Withdrawal History Table */}
        <div className="xl:col-span-3">
          <DashCard 
             title="Transaction History" 
             headerAction={<div className="text-sm text-primary cursor-pointer hover:underline">View All</div>}
          >
            <TransactionHistory /> 
          </DashCard>
        </div>
      </div>
    </main>
  );
}