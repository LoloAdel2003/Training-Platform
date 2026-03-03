// components/dashboard/instructor-table.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  MessageSquare, 
  Trash2, 
  BookOpen, 
  Map, 
  FileText, 
  Megaphone, 
  Briefcase 
} from "lucide-react";
import { StatusBadge } from "../../shared/student/StatusBadge";

const instructors = [
  { 
    id: "#INST-402", 
    name: "Dr. Ahmad Salem", 
    courses: 12, 
    roadmaps: 4, 
    blogs: 8, 
    announcements: 15, 
    disciplinary: "Computer Science", 
    status: "Active" 
  },
  { 
    id: "#INST-105", 
    name: "Eng. Sarah Joy", 
    courses: 7, 
    roadmaps: 2, 
    blogs: 12, 
    announcements: 9, 
    disciplinary: "Graphic Design", 
    status: "Inactive" 
  },
] as const;

export const InstructorTable = () => {
  return (
    
      
<Table >        
    <TableHeader className="bg-muted/30 uppercase tracking-wider ">
            <TableRow className="text-[11px] text-muted-soft hover:bg-transparent">
              <TableHead className="">Instructor ID</TableHead>
              <TableHead className="">Name</TableHead>
              <TableHead className=" text-center">Courses</TableHead>
              <TableHead className=" text-center">Roadmaps</TableHead>
              <TableHead className=" text-center">Blogs</TableHead>
              <TableHead className=" text-center">Announcements</TableHead>
              <TableHead className="">Specialization</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className=" text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border">
            {instructors.map((instructor, idx) => (
              <TableRow key={idx} className="group hover:bg-accent/5 transition-colors">
                <TableCell className=" font-mono text-xs text-primary font-medium whitespace-nowrap">
                  {instructor.id}
                </TableCell>
                
                <TableCell className=" font-semibold text-foreground whitespace-nowrap">
                  {instructor.name}
                </TableCell>

                <TableCell className=" text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <BookOpen size={14} className="text-blue-500" />
                    <span className="font-bold">{instructor.courses}</span>
                  </div>
                </TableCell>

                <TableCell className=" text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <Map size={14} className="text-emerald-500" />
                    <span className="font-bold">{instructor.roadmaps}</span>
                  </div>
                </TableCell>

                <TableCell className=" text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <FileText size={14} className="text-amber-500" />
                    <span className="font-bold">{instructor.blogs}</span>
                  </div>
                </TableCell>

                <TableCell className=" text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <Megaphone size={14} className="text-purple-500" />
                    <span className="font-bold">{instructor.announcements}</span>
                  </div>
                </TableCell>

                <TableCell className=" whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {instructor.disciplinary}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="">
                  <StatusBadge status={instructor.status} />
                </TableCell>

                <TableCell className="text-center">
                  <div className="flex justify-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                      <Eye size={16}/>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500">
                      <MessageSquare size={16}/>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 size={16}/>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    
  );
};