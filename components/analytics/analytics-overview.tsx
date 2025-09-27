"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { TrendingUp, TrendingDown, Droplets, Thermometer, Leaf, Zap } from "lucide-react"

const metrics = [
  {
    title: "Yield Efficiency",
    value: "94.2%",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Water Usage",
    value: "1,247L",
    change: "-18.3%",
    trend: "down",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
  },
  {
    title: "Avg Temperature",
    value: "23.4°C",
    change: "+2.1°C",
    trend: "up",
    icon: Thermometer,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
  },
  {
    title: "Crop Health Score",
    value: "8.7/10",
    change: "+0.8",
    trend: "up",
    icon: Leaf,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Energy Efficiency",
    value: "87.3%",
    change: "+5.2%",
    trend: "up",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
  },
  {
    title: "Cost per Hectare",
    value: "$342",
    change: "-$28",
    trend: "down",
    icon: TrendingDown,
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
  },
]

export function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <FloatingCard className="p-6 hover:scale-105 transition-transform" delay={index * 0.2}>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div
                className={`text-sm font-medium ${
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                } flex items-center`}
              >
                {metric.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.title}</div>
            </div>
          </FloatingCard>
        </motion.div>
      ))}
    </div>
  )
}
