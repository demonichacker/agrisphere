"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { useAppStore } from "@/lib/store"
import { MapPin, Droplets, Thermometer, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLoading } from "@/lib/loading-context"

export function SensorMap() {
  const { sensors, setSelectedSensor, selectedSensor } = useAppStore()
  const { startLoading, stopLoading } = useLoading()

  const getSensorIcon = (type: string) => {
    switch (type) {
      case "soil":
        return Droplets
      case "weather":
        return Thermometer
      case "crop":
        return Leaf
      default:
        return MapPin
    }
  }

  const getSensorColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-500 bg-green-500/20"
      case "warning":
        return "text-yellow-500 bg-yellow-500/20"
      case "inactive":
        return "text-red-500 bg-red-500/20"
      default:
        return "text-gray-500 bg-gray-500/20"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <FloatingCard className="p-6 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Field Overview</h3>
          <Button
            variant="outline"
            size="sm"
            className="glass-card border-0 bg-transparent"
            onClick={() => {
              console.log("Viewing full map...")
            }}
          >
            View Full Map
          </Button>
        </div>

        {/* Simulated Map */}
        <div className="relative h-full bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-muted-foreground/20" />
              ))}
            </div>
          </div>

          {/* Sensor pins */}
          {sensors.map((sensor, index) => {
            const Icon = getSensorIcon(sensor.type)
            const isSelected = selectedSensor === sensor.id

            return (
              <motion.button
                key={sensor.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSensor(isSelected ? null : sensor.id)}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all ${getSensorColor(sensor.status)} ${
                  isSelected ? "ring-4 ring-primary/50 scale-110" : ""
                }`}
                style={{
                  left: `${20 + ((index * 15) % 60)}%`,
                  top: `${20 + ((index * 20) % 60)}%`,
                }}
              >
                <Icon className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full pulse-glow" />
              </motion.button>
            )
          })}

          {/* Selected sensor details */}
          {selectedSensor && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-lg"
            >
              {(() => {
                const sensor = sensors.find((s) => s.id === selectedSensor)
                if (!sensor) return null

                return (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{sensor.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getSensorColor(sensor.status)}`}>
                        {sensor.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {sensor.data.temperature && (
                        <div>
                          <span className="text-muted-foreground">Temperature:</span>
                          <span className="ml-2 font-medium text-foreground">{sensor.data.temperature}°C</span>
                        </div>
                      )}
                      {sensor.data.humidity && (
                        <div>
                          <span className="text-muted-foreground">Humidity:</span>
                          <span className="ml-2 font-medium text-foreground">{sensor.data.humidity}%</span>
                        </div>
                      )}
                      {sensor.data.soilMoisture && (
                        <div>
                          <span className="text-muted-foreground">Soil Moisture:</span>
                          <span className="ml-2 font-medium text-foreground">{sensor.data.soilMoisture}%</span>
                        </div>
                      )}
                      {sensor.data.ph && (
                        <div>
                          <span className="text-muted-foreground">pH Level:</span>
                          <span className="ml-2 font-medium text-foreground">{sensor.data.ph}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </div>
      </FloatingCard>
    </motion.div>
  )
}
