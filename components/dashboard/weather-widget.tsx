"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { Cloud, Sun, CloudRain, Wind } from "lucide-react"

export function WeatherWidget() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
      <FloatingCard className="p-6 min-w-[280px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-foreground">Current Weather</h3>
            <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
          </div>
          <Sun className="w-8 h-8 text-yellow-500" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-foreground">29°C</span>
            <span className="text-sm text-muted-foreground">Sunny</span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">12 km/h</span>
            </div>
            <div className="flex items-center space-x-2">
              <CloudRain className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">0%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">45%</span>
            </div>
          </div>

          <div className="pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground">Good conditions for cassava growth. Monitor soil moisture levels.</p>
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
