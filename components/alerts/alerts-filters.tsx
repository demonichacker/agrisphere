"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FloatingCard } from "@/components/ui/floating-card"
import { Search, Filter, SortAsc, RefreshCw } from "lucide-react"
import { useLoading } from "@/lib/loading-context"

export function AlertsFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSeverity, setFilterSeverity] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("time")
  const { startLoading, stopLoading } = useLoading()

  return (
    <FloatingCard className="p-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-1 flex-wrap gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-0 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search alerts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-0"
            />
          </div>

          {/* Severity Filter */}
          <Select value={filterSeverity} onValueChange={setFilterSeverity}>
            <SelectTrigger className="w-28 sm:w-32 glass-card border-0">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent className="glass-card border-0">
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-28 sm:w-32 glass-card border-0">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="glass-card border-0">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          {/* Type Filter */}
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-32 sm:w-40 glass-card border-0">
              <SelectValue placeholder="Alert Type" />
            </SelectTrigger>
            <SelectContent className="glass-card border-0">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="weather">Weather</SelectItem>
              <SelectItem value="soil">Soil</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="crop">Crop Health</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-28 sm:w-32 glass-card border-0">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="glass-card border-0">
              <SelectItem value="time">Time</SelectItem>
              <SelectItem value="severity">Severity</SelectItem>
              <SelectItem value="type">Type</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="glass-card border-0 bg-transparent"
            onClick={() => {
              // Simple refresh without loading spinner
              console.log("Refreshing alerts...")
            }}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="glass-card border-0 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Advanced
          </Button>
          <Button variant="outline" size="sm" className="glass-card border-0 bg-transparent">
            <SortAsc className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>
    </FloatingCard>
  )
}
