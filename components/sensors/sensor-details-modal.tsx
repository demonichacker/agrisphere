"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Droplets, Thermometer, Leaf, MapPin, Calendar, Battery, Wifi, Activity } from "lucide-react"

interface SensorDetailsModalProps {
  sensor: {
    id: string
    name: string
    type: "soil" | "weather" | "crop"
    location: { lat: number; lng: number }
    status: "active" | "inactive" | "warning"
    lastReading: Date
    data: {
      temperature?: number
      humidity?: number
      soilMoisture?: number
      ph?: number
      nutrients?: { n: number; p: number; k: number }
    }
  }
  open: boolean
  onClose: () => void
}

// Mock historical data
const generateHistoricalData = () => {
  return Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    temperature: Math.round((Math.random() * 10 + 15) * 10) / 10,
    humidity: Math.round((Math.random() * 30 + 40) * 10) / 10,
    soilMoisture: Math.round((Math.random() * 40 + 30) * 10) / 10,
  }))
}

export function SensorDetailsModal({ sensor, open, onClose }: SensorDetailsModalProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const historicalData = generateHistoricalData()

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-500"
      case "warning":
        return "bg-yellow-500/20 text-yellow-500"
      case "inactive":
        return "bg-red-500/20 text-red-500"
      default:
        return "bg-gray-500/20 text-gray-500"
    }
  }

  const Icon = getSensorIcon(sensor.type)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-card border-0 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{sensor.name}</DialogTitle>
              <DialogDescription className="capitalize">{sensor.type} sensor monitoring system</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1 mb-6">
          {["overview", "data", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Status & Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Status Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge className={getStatusColor(sensor.status)}>{sensor.status}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Battery Level</span>
                      <div className="flex items-center space-x-2">
                        <Battery className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-foreground">85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Signal Strength</span>
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-foreground">Strong</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last Reading</span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{sensor.lastReading.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Location & Configuration</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Coordinates</span>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">
                          {sensor.location.lat.toFixed(4)}, {sensor.location.lng.toFixed(4)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Sensor Type</span>
                      <span className="font-medium text-foreground capitalize">{sensor.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Reading Interval</span>
                      <span className="font-medium text-foreground">15 minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Data Retention</span>
                      <span className="font-medium text-foreground">1 year</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Readings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Current Readings</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sensor.data.temperature && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Thermometer className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-muted-foreground">Temperature</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{sensor.data.temperature}°C</span>
                    </div>
                  )}
                  {sensor.data.humidity && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-muted-foreground">Humidity</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{sensor.data.humidity}%</span>
                    </div>
                  )}
                  {sensor.data.soilMoisture && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-muted-foreground">Soil Moisture</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{sensor.data.soilMoisture}%</span>
                    </div>
                  )}
                  {sensor.data.ph && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Activity className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">pH Level</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{sensor.data.ph}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "data" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">24-Hour Data Trends</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="temperature" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="humidity" stroke="#3b82f6" strokeWidth={2} />
                    {sensor.type === "soil" && (
                      <Line type="monotone" dataKey="soilMoisture" stroke="#22c55e" strokeWidth={2} />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Sensor Configuration</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Configure sensor settings, alerts, and data collection parameters.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="glass-card border-0 bg-transparent">
                    Configure Alerts
                  </Button>
                  <Button variant="outline" className="glass-card border-0 bg-transparent">
                    Update Location
                  </Button>
                  <Button variant="outline" className="glass-card border-0 bg-transparent">
                    Calibrate Sensor
                  </Button>
                  <Button variant="outline" className="glass-card border-0 bg-transparent">
                    Export Data
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-border/50">
          <Button variant="outline" onClick={onClose} className="glass-card border-0 bg-transparent">
            Close
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
