"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { useAppStore } from "@/lib/store"
import { AlertTriangle, Info, AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function RecentAlerts() {
  const { alerts, markAlertRead } = useAppStore()

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return AlertTriangle
      case "error":
        return AlertCircle
      case "info":
        return Info
      default:
        return Info
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning":
        return "text-yellow-500 bg-yellow-500/20"
      case "error":
        return "text-red-500 bg-red-500/20"
      case "info":
        return "text-blue-500 bg-blue-500/20"
      default:
        return "text-gray-500 bg-gray-500/20"
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleDateString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <FloatingCard className="p-6 h-[300px] md:h-[400px] lg:h-[500px] flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Recent Alerts</h3>
          <Badge variant="secondary" className="bg-red-500/20 text-red-500">
            {alerts.filter((a) => !a.read).length} New
          </Badge>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {alerts.slice(0, 10).map((alert, index) => {
            const Icon = getAlertIcon(alert.type)

            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-4 rounded-lg border transition-all cursor-pointer hover:scale-[1.02] ${
                  alert.read ? "bg-muted/30 border-border/50 opacity-60" : "glass-card border-border/50"
                }`}
                onClick={() => markAlertRead(alert.id)}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getAlertColor(alert.type)}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground mb-1">{alert.message}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{formatTime(alert.timestamp)}</span>
                      {!alert.read && <Badge className="bg-green-500/20 text-green-500 text-xs px-1 py-0">New</Badge>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="pt-4 border-t border-border/50">
          <Button
            variant="outline"
            size="sm"
            className="w-full glass-card border-0 bg-transparent"
            onClick={() => {
              console.log("Viewing all alerts...")
            }}
          >
            View All Alerts
          </Button>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
