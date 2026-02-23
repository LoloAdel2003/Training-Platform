// components/roadmap/RoadmapFlow.tsx
import { RoadmapNode } from "@/api/type/roadmap";
import { RoadmapCard } from "./RoadmapCard";

interface RoadmapFlowProps {
  data: RoadmapNode[];
  level?: number;
}

export const RoadmapFlow = ({ data, level = 0 }: RoadmapFlowProps) => {
  return (
    <div className="relative flex flex-col items-center py-10">
      {/* Vertical Main Line */}
      {level === 0 && (
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-primary to-primary/40 rounded-full" />
      )}

      <div className="flex flex-col gap-20 relative z-10">
        {data.map((node, index) => (
          <div key={node.id} className="flex flex-col items-center relative">

            {/* Connector Circle */}
            {level === 0 && (
              <div className="absolute -top-10 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
            )}

            {/* Main Node */}
            <RoadmapCard node={node} />

            {/* Children */}
            {node.children && node.children.length > 0 && (
              <div className="mt-12 flex gap-16 relative">

                {/* Horizontal Connector Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-primary/40 rounded-full" />

                {node.children.map((child) => (
                  <div key={child.id} className="relative flex flex-col items-center">

                    {/* Vertical Connector to Child */}
                    <div className="absolute -top-6 w-1 h-6 bg-primary/40" />

                    <RoadmapFlow data={[child]} level={level + 1} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};