// components/dashboard/article-table.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { StatusBadge } from "./status-badge"
import { Edit2, Trash2, ExternalLink } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { StatusBadge } from "./StatusBadge";

const DATA = [
  { id: "art12", title: "React Performance", date: "01-01-2025", views: 100, comments: 4, status: "Published" },
  { id: "art44", title: "Next.js 15 Guide", date: "02-01-2025", views: 0, comments: 0, status: "Drafted" },
   { id: "art122", title: "React Performance", date: "01-01-2025", views: 100, comments: 4, status: "Published" },
  { id: "art444", title: "Next.js 15 Guide", date: "02-01-2025", views: 0, comments: 0, status: "Drafted" },
 
   { id: "art123", title: "React Performance", date: "01-01-2025", views: 100, comments: 4, status: "Published" },
  { id: "art445", title: "Next.js 15 Guide", date: "02-01-2025", views: 0, comments: 0, status: "Drafted" },
 
];

export function ArticleTable() {
  return (
    <div className="rounded-xl border-soft overflow-hidden bg-card">
      <Table>
        <TableHeader className="bg-muted/50 ">
          <TableRow className="">
            <TableHead className="w-12">No.</TableHead>
            <TableHead>Article Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Publish Date</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="px-2">
          {DATA.map((item, index) => (
            <Sheet key={item.id}>
              <SheetTrigger asChild>
                <TableRow className="cursor-pointer hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-muted-foreground">{item.id}</TableCell>
                  <TableCell className="font-semibold">{item.title}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.views}</TableCell>
                  <TableCell>
                    <StatusBadge status={item.status as any} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2" >
                      <button className="p-1.5 hover:text-primary"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </TableCell>
                </TableRow>
              </SheetTrigger>
              
              <SheetContent className="sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Article Details: {item.title}</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm">ID: {item.id}</p>
                    <p className="text-sm">Status: {item.status}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">هنا يمكنك وضع وصف المقال أو الكورس بالكامل كما في التصميم.</p>
                  <button className="w-full radial-primary-bg text-white py-2 rounded-lg flex items-center justify-center gap-2">
                    Open Editor <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}