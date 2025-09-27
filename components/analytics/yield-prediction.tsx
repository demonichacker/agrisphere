"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { TrendingUp } from "lucide-react"

const yieldData = [
  { month: "Jan", actual: 2400, predicted: 2300, target: 2500 },
  { month: "Feb", actual: 2210, predicted: 2250, target: 2500 },
  { month: "Mar", actual: 2290, predicted: 2400, target: 2500 },
  { month: "Apr", actual: 2000, predicted: 2100, target: 2500 },
  { month: "May", actual: 2181, predicted: 2300, target: 2500 },
  { month: "Jun", actual: 2500, predicted: 2600, target: 2500 },
  { month: "Jul", actual: null, predicted: 2750, target: 2500 },
  { month: "Aug", actual: null, predicted: 2800, target: 2500 },
  { month: "Sep", actual: null, predicted: 2650, target: 2500 },
  { month: "Oct", actual: null, predicted: 2400, target: 2500 },
  { month: "Nov", actual: null, predicted: 2200, target: 2500 },
  { month: "Dec", actual: null, predicted: 2100, target: 2500 },
]

export function YieldPrediction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <FloatingCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Yield Prediction Model</h3>
            <p className="text-sm text-muted-foreground">AI-powered crop yield forecasting with 95% accuracy</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+15% vs target</span>
            </div>
          </div>
        </div>

        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={yieldData}>
              <defs>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#22c55e"
                strokeWidth={3}
                fill="url(#actualGradient)"
                connectNulls={false}
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="#3b82f6"
                strokeWidth={3}
                strokeDasharray="5 5"
                fill="url(#predictedGradient)"
              />
              <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeWidth={2} strokeDasharray="10 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-green-500">2,750</div>
            <div className="text-sm text-muted-foreground">Predicted Peak (July)</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-blue-500">95.2%</div>
            <div className="text-sm text-muted-foreground">Model Accuracy</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-purple-500">+18%</div>
            <div className="text-sm text-muted-foreground">YoY Growth</div>
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
