"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const RoadmapFilters = () => {
  return (
    <div className="space-y-4 w-full">

      {/* 🔍 Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search for id, roadmap name..."
          className="pl-10 bg-background border-soft"
        />
      </div>

      {/* 🎛 Filters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        {/* Type */}
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground">Type:</label>
          <Select>
            <SelectTrigger className="bg-background border-soft h-9 text-xs">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Progress */}
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground">Progress:</label>
          <Select>
            <SelectTrigger className="bg-background border-soft h-9 text-xs">
              <SelectValue placeholder="Select Progress" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground">Category:</label>
          <Select>
            <SelectTrigger className="bg-background border-soft h-9 text-xs">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="frontend">Frontend</SelectItem>
              <SelectItem value="backend">Backend</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="devops">DevOps</SelectItem>
              <SelectItem value="ai">AI & ML</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground">Rating:</label>
          <Select>
            <SelectTrigger className="bg-background border-soft h-9 text-xs">
              <SelectValue placeholder="Select Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground">Sort By:</label>
          <Select>
            <SelectTrigger className="bg-background border-soft h-9 text-xs">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rating</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  )
}