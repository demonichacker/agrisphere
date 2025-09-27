"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const soilMoistureData = [
  { time: "00:00", moisture: 45 },
  { time: "04:00", moisture: 42 },
  { time: "08:00", moisture: 48 },
  { time: "12:00", moisture: 52 },
  { time: "16:00", moisture: 49 },
  { time: "20:00", moisture: 46 },
  { time: "24:00", moisture: 44 },
]

const yieldData = [
  { month: "Jan", yield: 2400 },
  { month: "Feb", yield: 2210 },
  { month: "Mar", yield: 2290 },
  { month: "Apr", yield: 2000 },
  { month: "May", yield: 2181 },
  { month: "Jun", yield: 2500 },
]

export function DashboardOverview() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <FloatingCard className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">Soil Moisture Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={soilMoistureData}>
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
                <Line
                  type="monotone"
                  dataKey="moisture"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </FloatingCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <FloatingCard className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">Monthly Yield Prediction</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="yield" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </FloatingCard>
      </motion.div>
    </div>
  )
}
