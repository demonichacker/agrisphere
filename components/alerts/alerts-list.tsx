"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAppStore } from "@/lib/store"
import {
  AlertTriangle,
  Info,
  AlertCircle,
  Clock,
  CheckCircle,
  Droplets,
  Zap,
  Leaf,
  Cloud,
  MoreVertical,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mockAlerts = [
  {
    id: "1",
    type: "warning",
    category: "soil",
    title: "Low Soil Moisture Alert",
    message: "Soil moisture levels in Cassava Field - Ogun have dropped below 40%. Immediate irrigation recommended for optimal tuber development.",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    severity: "high",
    status: "active",
    sensor: "Cassava Field - Ogun Sensor",
    read: false,
  },
  {
    id: "2",
    type: "info",
    category: "weather",
    title: "Harmattan Weather Update",
    message: "Dry harmattan winds expected in the next 12 hours. Consider protective measures for cassava plants.",
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    severity: "medium",
    status: "active",
    sensor: "Weather Station - Lagos",
    read: false,
  },
  {
    id: "3",
    type: "error",
    category: "equipment",
    title: "Irrigation Pump Malfunction",
    message: "Solar-powered irrigation pump pressure has dropped below operational threshold. Check battery and pump status.",
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    severity: "high",
    status: "pending",
    sensor: "Pump Station - Ogun",
    read: true,
  },
  {
    id: "4",
    type: "warning",
    category: "crop",
    title: "Cassava Mosaic Disease Warning",
    message: "AI analysis indicates potential cassava mosaic disease symptoms. Recommend immediate inspection and treatment.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    severity: "medium",
    status: "resolved",
    sensor: "Crop Monitor - Ogun",
    read: true,
  },
  {
    id: "5",
    type: "info",
    category: "weather",
    title: "Optimal Planting Temperature",
    message: "Temperature conditions are now optimal for rice transplantation in Kebbi region.",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    severity: "low",
    status: "resolved",
    sensor: "Weather Station - Kebbi",
    read: true,
  },
]

export function AlertsList() {
  const { markAlertRead } = useAppStore()

  const getAlertIcon = (category: string) => {
    switch (category) {
      case "soil":
        return Droplets
      case "weather":
        return Cloud
      case "equipment":
        return Zap
      case "crop":
        return Leaf
      default:
        return Info
    }
  }

  const getTypeIcon = (type: string) => {
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500/20 text-red-500"
      case "medium":
        return "bg-yellow-500/20 text-yellow-500"
      case "low":
        return "bg-blue-500/20 text-blue-500"
      default:
        return "bg-gray-500/20 text-gray-500"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-red-500/20 text-red-500"
      case "pending":
        return "bg-yellow-500/20 text-yellow-500"
      case "resolved":
        return "bg-green-500/20 text-green-500"
      default:
        return "bg-gray-500/20 text-gray-500"
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <FloatingCard className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-xl font-semibold text-foreground">All Alerts</h3>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-red-500/20 text-red-500">
              {mockAlerts.filter((a) => !a.read).length} Unread
            </Badge>
            <Button variant="outline" size="sm" className="glass-card border-0 bg-transparent">
              Mark All Read
            </Button>
          </div>
        </div>

        <div className="space-y-4 max-h-[600px] overflow-y-auto">
          {mockAlerts.map((alert, index) => {
            const CategoryIcon = getAlertIcon(alert.category)
            const TypeIcon = getTypeIcon(alert.type)

            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-4 rounded-lg border transition-all cursor-pointer hover:scale-[1.02] ${
                  alert.read ? "bg-muted/30 border-border/50 opacity-70" : "glass-card border-border/50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* Icon and Content Row */}
                  <div className="flex items-start space-x-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getSeverityColor(alert.severity)}`}
                    >
                      <TypeIcon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-foreground">{alert.title}</h4>
                        {!alert.read && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{alert.message}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <CategoryIcon className="w-3 h-3" />
                          <span>{alert.sensor}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatTime(alert.timestamp)}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                        <Badge className={getStatusColor(alert.status)}>{alert.status}</Badge>
                        <Badge variant="outline" className="capitalize">
                          {alert.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 sm:flex-shrink-0">
                    {alert.status === "active" && (
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                        Resolve
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-card border-0">
                        <DropdownMenuItem>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Info className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Create Rule
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </FloatingCard>
    </motion.div>
  )
}
