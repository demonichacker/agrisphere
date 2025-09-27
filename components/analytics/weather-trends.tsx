"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Cloud, Sun, CloudRain, Wind, Droplets } from "lucide-react"

const weatherData = [
  { day: "Mon", temp: 22, humidity: 65, rainfall: 0, windSpeed: 12 },
  { day: "Tue", temp: 24, humidity: 58, rainfall: 2, windSpeed: 15 },
  { day: "Wed", temp: 21, humidity: 72, rainfall: 8, windSpeed: 18 },
  { day: "Thu", temp: 19, humidity: 78, rainfall: 12, windSpeed: 22 },
  { day: "Fri", temp: 23, humidity: 62, rainfall: 0, windSpeed: 14 },
  { day: "Sat", temp: 25, humidity: 55, rainfall: 0, windSpeed: 10 },
  { day: "Sun", temp: 26, humidity: 52, rainfall: 0, windSpeed: 8 },
]

const currentWeather = {
  temperature: 24,
  humidity: 62,
  windSpeed: 14,
  rainfall: 0,
  condition: "sunny",
}

export function WeatherTrends() {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return Sun
      case "cloudy":
        return Cloud
      case "rainy":
        return CloudRain
      default:
        return Sun
    }
  }

  const WeatherIcon = getWeatherIcon(currentWeather.condition)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <FloatingCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Weather Trends</h3>
            <p className="text-sm text-muted-foreground">7-day weather analysis and irrigation recommendations</p>
          </div>
          <div className="flex items-center space-x-3">
            <WeatherIcon className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-semibold text-foreground">{currentWeather.temperature}°C</span>
          </div>
        </div>

        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="temp" orientation="left" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="rain" orientation="right" stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar yAxisId="rain" dataKey="rainfall" fill="#3b82f6" opacity={0.6} radius={[2, 2, 0, 0]} />
              <Line
                yAxisId="temp"
                type="monotone"
                dataKey="temp"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
              />
              <Line
                yAxisId="temp"
                type="monotone"
                dataKey="humidity"
                stroke="#22c55e"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#22c55e", strokeWidth: 2, r: 3 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Sun className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-lg font-bold text-foreground">{currentWeather.temperature}°C</div>
            <div className="text-xs text-muted-foreground">Temperature</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Droplets className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-lg font-bold text-foreground">{currentWeather.humidity}%</div>
            <div className="text-xs text-muted-foreground">Humidity</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Wind className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-lg font-bold text-foreground">{currentWeather.windSpeed}</div>
            <div className="text-xs text-muted-foreground">Wind km/h</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <CloudRain className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-foreground">{currentWeather.rainfall}mm</div>
            <div className="text-xs text-muted-foreground">Rainfall</div>
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
