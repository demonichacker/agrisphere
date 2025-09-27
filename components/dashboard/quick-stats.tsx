"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { Droplets, Thermometer, Leaf, TrendingUp, AlertTriangle, Zap } from "lucide-react"

const stats = [
  {
    title: "Soil Moisture",
    value: "68%",
    change: "+5%",
    trend: "up",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
  },
  {
    title: "Temperature",
    value: "24°C",
    change: "+2°C",
    trend: "up",
    icon: Thermometer,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
  },
  {
    title: "Crop Health",
    value: "92%",
    change: "+8%",
    trend: "up",
    icon: Leaf,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Yield Prediction",
    value: "+15%",
    change: "+3%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "-2",
    trend: "down",
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
  },
  {
    title: "Energy Usage",
    value: "1.2kW",
    change: "-15%",
    trend: "down",
    icon: Zap,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/20",
  },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <FloatingCard className="p-6" delay={index * 0.2}>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.title}</div>
            </div>
          </FloatingCard>
        </motion.div>
      ))}
    </div>
  )
}
