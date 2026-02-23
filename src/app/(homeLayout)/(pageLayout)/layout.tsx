import { DynamicBreadcrumb } from "@/components/custome/DynamicBreadcrumb";
import React from "react"
type CartLayoutProps = {
  children: React.ReactNode;
};
export default function CartLayout({ children }: CartLayoutProps) {
  return (
    <div className="pageLayout">
     <DynamicBreadcrumb />
     <div className="pt-2">
      {children}
      </div>
    </div>
  );
}