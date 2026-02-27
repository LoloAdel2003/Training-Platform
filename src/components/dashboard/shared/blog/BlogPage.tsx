"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { StatCard } from "./StatCard"
import { ArticleTable } from "./ArticleTable"
import Link from "next/link"

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState("this-week")

  return (
    <div className="space-y-6">
      
      {/* Header + Tabs */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">Articles Overview</h1>
        </div>
          <Button variant="default" size="sm" className="w-full md:w-auto">
          <Link href="newblog" className="flex items-center">
            <Plus className="w-4 h-4 mr-2" /> New Article
          </Link>
        </Button>

        {/* <Tabs
          defaultValue="this-week"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-auto"
        >
          <TabsList className="bg-muted">
            <TabsTrigger value="this-week">This Week</TabsTrigger>
            <TabsTrigger value="last-week">Last Week</TabsTrigger>
            
          </TabsList>
        </Tabs> */}
      </div>

      {/* Stats Grid - يتغير حسب التاب */}
     
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Most Viewed Article"
              value='"How to become React Developer"'
              subtext="Last 7 days"
            />
            <StatCard
              title="Total Articles"
              value="400"
              trend="+20%"
              subtext="Last 7 days"
            />
            <StatCard
              title="Comments Count"
              value="30"
              trend="+30%"
              subtext="Last 7 days"
            />
          </div>
        

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full  md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-10 py-2 bg-card border-soft"
            placeholder="Search for id, article name..."
          />
        </div>

        <Tabs
          defaultValue="this-week"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-auto"
        >
          <TabsList className="bg-muted">
            <TabsTrigger value="this-week">All Blogs (400)</TabsTrigger>
            <TabsTrigger value="last-week">Published(200)</TabsTrigger>
            <TabsTrigger value="last-week">Drafted(200)</TabsTrigger>
            
          </TabsList>
        </Tabs>
      </div>
       


      {/* Table */}
      <ArticleTable />
    </div>
  )
}