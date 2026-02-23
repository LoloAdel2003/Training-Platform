
import { Check, MoveRight } from "lucide-react";

export const CheckIcon = () => (
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
  </div>
);

export const StepIcon = () => (
  <MoveRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
);

export const LearningPoint = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 p-2">
    <CheckIcon />
    <span className="text-sm text-foreground/80 leading-tight">{text}</span>
  </div>
);