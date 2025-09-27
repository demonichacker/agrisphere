"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FloatingCard } from "@/components/ui/floating-card"
import { Calendar, Download, Filter, RefreshCw } from "lucide-react"

export function AnalyticsFilters() {
  const [timeRange, setTimeRange] = useState("7d")
  const [dataType, setDataType] = useState("all")
  const [comparison, setComparison] = useState("previous")

  return (
    <FloatingCard className="p-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-1 flex-wrap gap-4 items-center">
          {/* Time Range */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-28 sm:w-32 glass-card border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-card border-0">
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Data Type */}
          <Select value={dataType} onValueChange={setDataType}>
            <SelectTrigger className="w-32 sm:w-40 glass-card border-0">
              <SelectValue placeholder="Data Type" />
            </SelectTrigger>
            <SelectContent className="glass-card border-0">
              <SelectItem value="all">All Metrics</SelectItem>
              <SelectItem value="soil">Soil Data</SelectItem>
              <SelectItem value="weather">Weather Data</SelectItem>
              <SelectItem value="crop">Crop Health</SelectItem>
              <SelectItem value="yield">Yield Data</SelectItem>
            </SelectContent>
          </Select>

          {/* Comparison */}
          <Select value={comparison} onValueChange={setComparison}>
            <SelectTrigger className="w-32 sm:w-40 glass-card border-0">
              <SelectValue placeholder="Compare to" />
            </SelectTrigger>
            <SelectContent className="glass-card border-0">
              <SelectItem value="previous">Previous Period</SelectItem>
              <SelectItem value="lastyear">Same Period Last Year</SelectItem>
              <SelectItem value="average">Historical Average</SelectItem>
              <SelectItem value="target">Target Values</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="glass-card border-0 bg-transparent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="glass-card border-0 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Advanced
          </Button>
          <Button variant="outline" size="sm" className="glass-card border-0 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </FloatingCard>
  )
}
