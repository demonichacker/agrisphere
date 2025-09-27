"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAppStore } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"
import { Plus, MapPin, Droplets, Thermometer, Leaf } from "lucide-react"

export function AddSensorDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [type, setType] = useState<"soil" | "weather" | "crop">("soil")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const { addSensor } = useAppStore()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !lat || !lng) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    const newSensor = {
      name,
      type,
      location: { lat: Number.parseFloat(lat), lng: Number.parseFloat(lng) },
      status: "active" as const,
      lastReading: new Date(),
      data: {
        temperature: Math.round((Math.random() * 10 + 15) * 10) / 10,
        humidity: Math.round((Math.random() * 30 + 40) * 10) / 10,
        soilMoisture: type === "soil" ? Math.round((Math.random() * 40 + 30) * 10) / 10 : undefined,
        ph: type === "soil" ? Math.round((Math.random() * 2 + 6) * 10) / 10 : undefined,
      },
    }

    addSensor(newSensor)
    toast({
      title: "Sensor added",
      description: `${name} has been added to your system.`,
    })

    // Reset form
    setName("")
    setType("soil")
    setLat("")
    setLng("")
    setOpen(false)
  }

  const getSensorIcon = (sensorType: string) => {
    switch (sensorType) {
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Sensor
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card border-0 max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Sensor</DialogTitle>
          <DialogDescription>Configure a new IoT sensor for your agricultural monitoring system.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sensor Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-2"
          >
            <Label htmlFor="name">Sensor Name</Label>
            <Input
              id="name"
              placeholder="e.g., Field A - North Sensor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass-card border-0"
              required
            />
          </motion.div>

          {/* Sensor Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2"
          >
            <Label>Sensor Type</Label>
            <Select value={type} onValueChange={(value: "soil" | "weather" | "crop") => setType(value)}>
              <SelectTrigger className="glass-card border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-card border-0">
                <SelectItem value="soil">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span>Soil Sensor</span>
                  </div>
                </SelectItem>
                <SelectItem value="weather">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-red-500" />
                    <span>Weather Station</span>
                  </div>
                </SelectItem>
                <SelectItem value="crop">
                  <div className="flex items-center space-x-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span>Crop Monitor</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="space-y-4"
          >
            <Label>Location Coordinates</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lat" className="text-sm">
                  Latitude
                </Label>
                <Input
                  id="lat"
                  type="number"
                  step="any"
                  placeholder="40.7128"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  className="glass-card border-0"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lng" className="text-sm">
                  Longitude
                </Label>
                <Input
                  id="lng"
                  type="number"
                  step="any"
                  placeholder="-74.0060"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  className="glass-card border-0"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-4 bg-muted/50 rounded-lg space-y-2"
          >
            <div className="flex items-center space-x-2">
              {(() => {
                const Icon = getSensorIcon(type)
                return <Icon className="w-5 h-5 text-green-500" />
              })()}
              <span className="font-medium text-foreground">{name || "Sensor Name"}</span>
            </div>
            <p className="text-sm text-muted-foreground capitalize">{type} sensor</p>
            {lat && lng && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>
                  {lat}, {lng}
                </span>
              </div>
            )}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex space-x-4"
          >
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 glass-card border-0"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 text-white">
              Add Sensor
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
