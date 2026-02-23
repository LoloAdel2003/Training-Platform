// app/roadmap/page.tsx
import { RoadmapNode } from "@/api/type/roadmap";
import { RoadmapFlow } from "./RoadmapFlow";
// import { RoadmapNode } from "@/types/roadmap";

const demoData: RoadmapNode[] = [
  {
    id: "1",
    title: "HTML",
    type: "course",
    status: "completed",
    description: "HTML is the standard markup language for documents designed to be displayed in a web browser.",
    children: [
       { id: "1-1", title: "Internet Basics", type: "course", status: "completed" , description: "Learn how the internet works, including HTTP, browsers, and servers." },
         { id: "1-2", title: "HTML Basics", type: "course", status: "completed" , description: "Learn the structure of HTML documents, including elements, attributes, and semantic tags." },
            // { id: "1-3", title: "Advanced HTML", type: "course", status: "completed" , description: "Learn about forms, multimedia, and accessibility in HTML." },

    ]
  },
  {
    id: "2",
    title: "CSS",
    type: "course",
    status: "in-progress",
    description: "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    id: "3",
    title: "Simple Project",
    type: "project",
    status: "not-started",
    description: "Build a responsive landing page using HTML and CSS.",
  }
];

export default function FullRoadmap() {
  return (
    <main className="pageLayout">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Frontend Developer Roadmap</h1>
          <p className="text-muted-soft">Step by step guide to becoming a modern frontend developer.</p>
        </div> */}
        
        <div className="bg-app/50 backdrop-blur-sm p-8 rounded-[var(--radius)] border-soft">
          <RoadmapFlow data={demoData} />
        </div>
      </div>
    </main>
  );
}