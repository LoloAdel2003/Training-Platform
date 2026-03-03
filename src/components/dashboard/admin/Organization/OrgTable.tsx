// components/dashboard/organization-table.tsx
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
  Users, // أيقونة الأعضاء
  Building2 // أيقونة المنظمة
} from "lucide-react";
import { StatusBadge } from "../../shared/student/StatusBadge";

const organizations = [
  { 
    id: "#ORG-901", 
    name: "Tech Academy", 
    members: 150, // عدد الأعضاء
    courses: 45, 
    roadmaps: 10, 
    blogs: 24, 
    announcements: 30, 
    disciplinary: "Technology", 
    status: "Active" 
  },
  { 
    id: "#ORG-202", 
    name: "Creative Hub", 
    members: 85, // عدد الأعضاء
    courses: 18, 
    roadmaps: 5, 
    blogs: 42, 
    announcements: 12, 
    disciplinary: "Design & Arts", 
    status: "Active" 
  },
] as const;

export const OrganizationTable = () => {
  return (
 
    <Table className="min-w-max">
          <TableHeader className="bg-muted/30 uppercase tracking-wider">
            <TableRow className="text-[11px] text-muted-soft hover:bg-transparent">
              <TableHead className="px-6 py-4">Org ID</TableHead>
              <TableHead className="px-6 py-4">Org Name</TableHead>
              <TableHead className="px-6 py-4 text-center">Members</TableHead> {/* العمود الجديد */}
              <TableHead className="px-6 py-4 text-center">Courses</TableHead>
              <TableHead className="px-6 py-4 text-center">Roadmaps</TableHead>
              <TableHead className="px-6 py-4 text-center">Blogs</TableHead>
              <TableHead className="px-6 py-4 text-center">Announcements</TableHead>
              <TableHead className="px-6 py-4">Specialization</TableHead>
              <TableHead className="px-6 py-4">Status</TableHead>
              <TableHead className="px-6 py-4 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border">
            {organizations.map((org, idx) => (
              <TableRow key={idx} className="group hover:bg-accent/5 transition-colors">
                <TableCell className="px-6 py-4 font-mono text-xs text-primary font-medium whitespace-nowrap">
                  {org.id}
                </TableCell>
                
                <TableCell className="px-6 py-4 font-semibold text-foreground whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className="text-muted-foreground" />
                    {org.name}
                  </div>
                </TableCell>

                {/* عدد الأعضاء - العمود الجديد */}
                <TableCell className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <Users size={14} className="text-indigo-500" />
                    <span className="font-bold">{org.members}</span>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <BookOpen size={14} className="text-blue-500" />
                    <span className="font-bold">{org.courses}</span>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <Map size={14} className="text-emerald-500" />
                    <span className="font-bold">{org.roadmaps}</span>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <FileText size={14} className="text-amber-500" />
                    <span className="font-bold">{org.blogs}</span>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <Megaphone size={14} className="text-purple-500" />
                    <span className="font-bold">{org.announcements}</span>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-muted-foreground">
                    {org.disciplinary}
                  </span>
                </TableCell>

                <TableCell className="px-6 py-4">
                  <StatusBadge status={org.status} />
                </TableCell>

                <TableCell className="px-6 py-4 text-center">
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