"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { Droplets, Activity, Zap } from "lucide-react"

const soilData = [
  { subject: "Nitrogen", current: 120, optimal: 150, fullMark: 200 },
  { subject: "Phosphorus", current: 98, optimal: 100, fullMark: 150 },
  { subject: "Potassium", current: 86, optimal: 120, fullMark: 180 },
  { subject: "pH Level", current: 6.8, optimal: 7.0, fullMark: 8.0 },
  { subject: "Moisture", current: 65, optimal: 70, fullMark: 100 },
  { subject: "Organic Matter", current: 4.2, optimal: 5.0, fullMark: 8.0 },
]

const nutrients = [
  { name: "Nitrogen (N)", value: 120, unit: "ppm", status: "low", color: "text-yellow-500" },
  { name: "Phosphorus (P)", value: 98, unit: "ppm", status: "optimal", color: "text-green-500" },
  { name: "Potassium (K)", value: 86, unit: "ppm", status: "low", color: "text-red-500" },
]

export function SoilAnalysis() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <FloatingCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Soil Health Analysis</h3>
            <p className="text-sm text-muted-foreground">Comprehensive soil composition and nutrient analysis</p>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">Health Score: 8.2/10</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={soilData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, "dataMax"]}
                  tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Optimal"
                  dataKey="optimal"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Nutrient Breakdown */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Nutrient Levels</h4>
            {nutrients.map((nutrient, index) => (
              <div key={nutrient.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{nutrient.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${nutrient.color}`}>{nutrient.status}</span>
                    <span className="text-sm text-foreground">
                      {nutrient.value} {nutrient.unit}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      nutrient.status === "optimal"
                        ? "bg-green-500"
                        : nutrient.status === "low"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${(nutrient.value / 200) * 100}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-muted-foreground">Soil Moisture</span>
                </div>
                <span className="font-medium text-foreground">65%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">pH Level</span>
                </div>
                <span className="font-medium text-foreground">6.8</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">Conductivity</span>
                </div>
                <span className="font-medium text-foreground">1.2 mS/cm</span>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
