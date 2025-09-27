"use client"
import { FloatingCard } from "@/components/ui/floating-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAppStore } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"
import {
  Droplets,
  Thermometer,
  Leaf,
  MapPin,
  Calendar,
  MoreVertical,
  Trash2,
  Settings,
  Activity,
  Battery,
  Wifi,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SensorCardProps {
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
}

export function SensorCard({ sensor }: SensorCardProps) {
  const { removeSensor, updateSensorData } = useAppStore()
  const { toast } = useToast()

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

  const handleDelete = () => {
    removeSensor(sensor.id)
    toast({
      title: "Sensor removed",
      description: `${sensor.name} has been removed from your system.`,
    })
  }

  const handleSimulateReading = () => {
    const newData = {
      temperature: Math.round((Math.random() * 10 + 15) * 10) / 10,
      humidity: Math.round((Math.random() * 30 + 40) * 10) / 10,
      soilMoisture: Math.round((Math.random() * 40 + 30) * 10) / 10,
      ph: Math.round((Math.random() * 2 + 6) * 10) / 10,
    }

    updateSensorData(sensor.id, newData)
    toast({
      title: "Reading updated",
      description: `New data received from ${sensor.name}.`,
    })
  }

  const Icon = getSensorIcon(sensor.type)

  return (
    <FloatingCard className="p-6 hover:scale-105 transition-transform cursor-pointer">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{sensor.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">{sensor.type} sensor</p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card border-0">
              <DropdownMenuItem onClick={handleSimulateReading}>
                <Activity className="w-4 h-4 mr-2" />
                Simulate Reading
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-red-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Remove
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between">
          <Badge className={getStatusColor(sensor.status)}>{sensor.status}</Badge>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Battery className="w-4 h-4" />
            <span>85%</span>
            <Wifi className="w-4 h-4" />
          </div>
        </div>

        {/* Data */}
        <div className="space-y-3">
          {sensor.data.temperature && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Temperature</span>
              <span className="font-medium text-foreground">{sensor.data.temperature}°C</span>
            </div>
          )}
          {sensor.data.humidity && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Humidity</span>
              <span className="font-medium text-foreground">{sensor.data.humidity}%</span>
            </div>
          )}
          {sensor.data.soilMoisture && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Soil Moisture</span>
              <span className="font-medium text-foreground">{sensor.data.soilMoisture}%</span>
            </div>
          )}
          {sensor.data.ph && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">pH Level</span>
              <span className="font-medium text-foreground">{sensor.data.ph}</span>
            </div>
          )}
        </div>

        {/* Location & Last Reading */}
        <div className="pt-3 border-t border-border/50 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>
              {sensor.location.lat.toFixed(4)}, {sensor.location.lng.toFixed(4)}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last reading: {sensor.lastReading.toLocaleDateString()}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex-1 glass-card border-0 bg-transparent">
            View Details
          </Button>
          <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600 text-white">
            Configure
          </Button>
        </div>
      </div>
    </FloatingCard>
  )
}
