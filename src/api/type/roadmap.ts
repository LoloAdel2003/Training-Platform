// types/roadmap.ts
export type Status = 'completed' | 'in-progress' | 'not-started';
export type NodeType = 'course' | 'project' | 'resource';

export interface RoadmapNode {
  id: string;
  title: string;
  type: NodeType;
  status: Status;
  description?: string;
 
  children?: RoadmapNode[];
}