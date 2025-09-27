"use client"

import { motion } from "framer-motion"
import { useAppStore } from "@/lib/store"
import { SensorCard } from "@/components/sensors/sensor-card"

export function SensorsGrid() {
  const { sensors } = useAppStore()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sensors.map((sensor, index) => (
        <motion.div
          key={sensor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <SensorCard sensor={sensor} />
        </motion.div>
      ))}
    </div>
  )
}
