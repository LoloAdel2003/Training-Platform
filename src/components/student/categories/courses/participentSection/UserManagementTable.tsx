// src/components/organisms/UserManagementTable.tsx
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, ListFilter } from "lucide-react";
import { UserRow } from "./UserRow";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

type User = {
  id: number;
  name: string;
  role: "Instructor" | "Student" | "Admin";
  lastVisited: string;
};

export const UserManagementTable = () => {

  // ✅ البيانات فوق
  const users: User[] = [
    {
      id: 1,
      name: "Ahmed Adel",
      role: "Instructor",
      lastVisited: "2 days ago",
    },
    {
      id: 2,
      name: "Osama Ahmed",
      role: "Student",
      lastVisited: "5 days ago",
    },
    {
      id: 3,
      name: "Sara Mohammed",
      role: "Student",
      lastVisited: "1 week ago",
    },
    {
      id: 4,
      name: "Lina Khaled",
      role: "Instructor",
      lastVisited: "3 days ago",
    },
    {
      id: 5,
      name: "Admin User",
      role: "Admin",
      lastVisited: "Today",
    },
  ];

  return (
    <div className="bg-card border-soft rounded-[var(--radius)] shadow-medium overflow-hidden">

      {/* 🔍 Toolbar */}
      <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-soft">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-10 h-10 bg-background"
          />
        </div>

        <Button variant="outline" size="sm" className="gap-2">
          <ListFilter className="h-4 w-4" /> Filter
        </Button>
      </div>

      {/* 📋 Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="border-soft">
              <TableHead className="w-[300px] font-bold text-foreground">
                Name
              </TableHead>
              <TableHead className="font-bold text-foreground">
                Role
              </TableHead>
              <TableHead className="font-bold text-foreground">
                Last Visited
              </TableHead>
              <TableHead className="text-right font-bold text-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* ✅ Loop */}
            {users.map((user) => (
              <UserRow
                key={user.id}
                id={user.id}
                name={user.name}
                role={user.role}
                lastVisited={user.lastVisited}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 🔄 Pagination */}
      {/* <div className="p-6 border-t border-soft flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="bg-muted/50" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div> */}

    </div>
  );
};
