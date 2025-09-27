"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { Button } from "@/components/ui/button"
import { CloudRain, Sun, Wind, Snowflake, Zap } from "lucide-react"

const weatherAlerts = [
  {
    id: "1",
    type: "Heavy Rain",
    message: "Heavy rainfall expected in next 6 hours - typical of Nigerian wet season",
    severity: "high",
    time: "Next 6 hours",
    icon: CloudRain,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    action: "Adjust irrigation schedule",
  },
  {
    id: "2",
    type: "High Temperature",
    message: "Temperature will exceed 35°C today - monitor cassava for heat stress",
    severity: "medium",
    time: "Today 2-6 PM",
    icon: Sun,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    action: "Increase irrigation frequency",
  },
  {
    id: "3",
    type: "Harmattan Winds",
    message: "Dry harmattan winds expected - protect against desiccation",
    severity: "medium",
    time: "Next 48 hours",
    icon: Wind,
    color: "text-gray-500",
    bgColor: "bg-gray-500/20",
    action: "Secure equipment and protect crops",
  },
  {
    id: "4",
    type: "Flood Warning",
    message: "Heavy rains may cause flooding in low-lying rice fields",
    severity: "high",
    time: "Tomorrow",
    icon: CloudRain,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/20",
    action: "Prepare drainage systems",
  },
]

const currentConditions = {
  temperature: 29,
  humidity: 78,
  windSpeed: 8,
  pressure: 1012,
  visibility: 12,
  uvIndex: 9,
}

export function WeatherAlerts() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-500/50 bg-red-500/10"
      case "medium":
        return "border-yellow-500/50 bg-yellow-500/10"
      case "low":
        return "border-blue-500/50 bg-blue-500/10"
      default:
        return "border-gray-500/50 bg-gray-500/10"
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FloatingCard className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold text-foreground">Current Conditions</h3>
            <Sun className="w-6 h-6 text-yellow-500" />
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{currentConditions.temperature}°C</div>
              <div className="text-sm text-muted-foreground">Sunny</div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Humidity</span>
                <span className="font-medium text-foreground">{currentConditions.humidity}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wind</span>
                <span className="font-medium text-foreground">{currentConditions.windSpeed} km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pressure</span>
                <span className="font-medium text-foreground">{currentConditions.pressure} hPa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">UV Index</span>
                <span className="font-medium text-foreground">{currentConditions.uvIndex}</span>
              </div>
            </div>
          </div>
        </FloatingCard>
      </motion.div>

      {/* Weather Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FloatingCard className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold text-foreground">Weather Alerts</h3>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-yellow-500 font-medium">{weatherAlerts.length} Active</span>
            </div>
          </div>

          <div className="space-y-4">
            {weatherAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-4 rounded-lg border transition-all hover:scale-[1.02] cursor-pointer ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${alert.bgColor}`}>
                    <alert.icon className={`w-4 h-4 ${alert.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">{alert.type}</h4>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <div className="text-xs text-blue-500 font-medium">💡 {alert.action}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/50">
            <Button variant="outline" size="sm" className="w-full glass-card border-0 bg-transparent">
              View 7-Day Forecast
            </Button>
          </div>
        </FloatingCard>
      </motion.div>
    </div>
  )
}
