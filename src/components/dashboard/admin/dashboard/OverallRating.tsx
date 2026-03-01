import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress"; // من shadcn

const ratings = [
  { stars: 5, value: 58 },
  { stars: 4, value: 32 },
  { stars: 3, value: 8 },
  { stars: 2, value: 1 },
  { stars: 1, value: 1 },
];

export const OverallRating = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center p-6 bg-muted/30 rounded-lg">
        <h2 className="text-5xl font-bold mb-2">4.6</h2>
        <div className="flex justify-center gap-1 mb-2 text-yellow-500">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
        </div>
        <p className="text-muted-foreground">Overall Rating</p>
      </div>

      <div className="space-y-3">
        {ratings.map((r) => (
          <div key={r.stars} className="flex items-center gap-4">
            <div className="flex items-center gap-1 w-12">
              <span className="text-sm font-medium">{r.stars}</span>
              <Star size={12} className="fill-yellow-500 text-yellow-500" />
            </div>
            <Progress value={r.value} className="h-2 flex-1" />
            <span className="text-sm text-muted-foreground w-8">{r.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};