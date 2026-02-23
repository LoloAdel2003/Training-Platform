import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PurchaseRecord } from "@/api/type/purchase";
import { CourseItem } from "./CourseItem";
import { CreditCard, PlayCircle } from "lucide-react";

interface Props {
  data: PurchaseRecord[];
}

export const PurchaseHistory = ({ data }: Props) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-6 text-foreground">
        Purchase History
      </h2>

      <Accordion type="single" collapsible className="space-y-4">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-border bg-card rounded-lg px-4 shadow-small"
          >
            {/* Header */}
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex flex-col items-start gap-2">
                <span className="text-foreground font-medium">
                  {item.date}
                </span>

                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <PlayCircle size={14} className="text-primary" />
                    {item.totalCourses} Courses
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="font-bold text-foreground">$</span>
                    ${item.totalAmount.toFixed(2)} USD
                  </span>

                  <span className="flex items-center gap-1">
                    <CreditCard size={14} className="text-accent-foreground" />
                    {item.paymentMethod}
                  </span>
                </div>
              </div>
            </AccordionTrigger>

            {/* Content */}
            <AccordionContent className="border-t border-border pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Courses */}
                <div className="md:col-span-2 space-y-4">
                  {item.courses.map((course) => (
                    <CourseItem key={course.id} course={course} />
                  ))}
                </div>

                {/* Invoice Sidebar */}
                <div className="bg-muted/50 p-4 rounded-lg flex flex-col justify-center border-l border-border shadow-small">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {item.date}
                  </h3>

                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      {item.totalCourses} Courses • ${item.totalAmount} USD •{" "}
                      {item.paymentMethod}
                    </p>

                    <p className="mt-4 font-medium text-foreground">
                      {item.customerName}
                    </p>

                    <p className="text-muted-foreground/70">
                      {item.cardNumber}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
