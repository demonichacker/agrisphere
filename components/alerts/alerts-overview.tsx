"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { AlertTriangle, CheckCircle, Clock, Bell, Zap, Droplets } from "lucide-react"

const alertStats = [
  {
    title: "Active Alerts",
    value: "3",
    change: "-2 from yesterday",
    trend: "down",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
  },
  {
    title: "Resolved Today",
    value: "12",
    change: "+5 from yesterday",
    trend: "up",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Pending Review",
    value: "5",
    change: "Same as yesterday",
    trend: "neutral",
    icon: Clock,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
  },
  {
    title: "Total Notifications",
    value: "47",
    change: "+8 from yesterday",
    trend: "up",
    icon: Bell,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
  },
]

const criticalAlerts = [
  {
    type: "Soil Moisture",
    message: "Low soil moisture detected in Field A-North",
    severity: "high",
    time: "2 minutes ago",
    icon: Droplets,
  },
  {
    type: "Weather Warning",
    message: "Heavy rain expected in next 6 hours",
    severity: "medium",
    time: "15 minutes ago",
    icon: Zap,
  },
  {
    type: "Equipment Alert",
    message: "Irrigation pump pressure below threshold",
    severity: "high",
    time: "1 hour ago",
    icon: AlertTriangle,
  },
]

export function AlertsOverview() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-500 bg-red-500/20"
      case "medium":
        return "text-yellow-500 bg-yellow-500/20"
      case "low":
        return "text-blue-500 bg-blue-500/20"
      default:
        return "text-gray-500 bg-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {alertStats.map((stat, index) => (
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
                <div
                  className={`text-xs px-2 py-1 rounded-full ${
                    stat.trend === "up"
                      ? "bg-green-500/20 text-green-500"
                      : stat.trend === "down"
                        ? "bg-red-500/20 text-red-500"
                        : "bg-gray-500/20 text-gray-500"
                  }`}
                >
                  {stat.trend === "up" ? "↑" : stat.trend === "down" ? "↓" : "→"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.title}</div>
                <div className="text-xs text-muted-foreground">{stat.change}</div>
              </div>
            </FloatingCard>
          </motion.div>
        ))}
      </div>

      {/* Critical Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FloatingCard className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-xl font-semibold text-foreground">Critical Alerts</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-500 font-medium">Requires Immediate Attention</span>
            </div>
          </div>

          <div className="space-y-4">
            {criticalAlerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${getSeverityColor(alert.severity)}`}
                >
                  <alert.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-foreground">{alert.type}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:ml-auto">
                  <button className="px-3 py-1 text-xs bg-green-500/20 text-green-500 rounded-full hover:bg-green-500/30 transition-colors">
                    Resolve
                  </button>
                  <button className="px-3 py-1 text-xs bg-blue-500/20 text-blue-500 rounded-full hover:bg-blue-500/30 transition-colors">
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </FloatingCard>
      </motion.div>
    </div>
  )
}
