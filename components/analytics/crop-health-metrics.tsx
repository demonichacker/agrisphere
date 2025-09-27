"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { Leaf, AlertTriangle, CheckCircle, Clock } from "lucide-react"

const healthDistribution = [
  { name: "Excellent", value: 45, color: "#22c55e" },
  { name: "Good", value: 35, color: "#84cc16" },
  { name: "Fair", value: 15, color: "#f59e0b" },
  { name: "Poor", value: 5, color: "#ef4444" },
]

const cropGrowthData = [
  { stage: "Seedling", progress: 100, target: 100 },
  { stage: "Vegetative", progress: 85, target: 90 },
  { stage: "Flowering", progress: 60, target: 70 },
  { stage: "Fruiting", progress: 30, target: 40 },
  { stage: "Maturity", progress: 10, target: 15 },
]

const healthMetrics = [
  { name: "Leaf Color Index", value: 8.7, max: 10, status: "excellent" },
  { name: "Growth Rate", value: 7.2, max: 10, status: "good" },
  { name: "Disease Resistance", value: 9.1, max: 10, status: "excellent" },
  { name: "Stress Level", value: 2.3, max: 10, status: "excellent" },
]

export function CropHealthMetrics() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-500"
      case "good":
        return "text-blue-500"
      case "fair":
        return "text-yellow-500"
      case "poor":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return CheckCircle
      case "good":
        return CheckCircle
      case "fair":
        return Clock
      case "poor":
        return AlertTriangle
      default:
        return Clock
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <FloatingCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Crop Health Metrics</h3>
            <p className="text-sm text-muted-foreground">AI-powered crop health assessment and growth tracking</p>
          </div>
          <div className="flex items-center space-x-2">
            <Leaf className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">Overall Health: 8.7/10</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Health Distribution Pie Chart */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Health Distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={healthDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {healthDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {healthDistribution.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Progress */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Growth Progress</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cropGrowthData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="stage" type="category" width={80} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="target" fill="#e5e7eb" radius={[0, 2, 2, 0]} />
                  <Bar dataKey="progress" fill="#22c55e" radius={[0, 2, 2, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="mt-6 space-y-4">
          <h4 className="font-semibold text-foreground">Detailed Health Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthMetrics.map((metric) => {
              const StatusIcon = getStatusIcon(metric.status)
              return (
                <div key={metric.name} className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{metric.name}</span>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`w-4 h-4 ${getStatusColor(metric.status)}`} />
                      <span className={`text-sm font-medium ${getStatusColor(metric.status)}`}>
                        {metric.value}/{metric.max}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-green-500 transition-all duration-1000"
                      style={{ width: `${(metric.value / metric.max) * 100}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
