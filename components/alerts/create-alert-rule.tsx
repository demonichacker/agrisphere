"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Plus, Bell, Mail, Smartphone } from "lucide-react"

export function CreateAlertRule() {
  const [open, setOpen] = useState(false)
  const [ruleName, setRuleName] = useState("")
  const [condition, setCondition] = useState("")
  const [threshold, setThreshold] = useState("")
  const [severity, setSeverity] = useState("medium")
  const [notificationMethod, setNotificationMethod] = useState("app")
  const [description, setDescription] = useState("")
  const [isEnabled, setIsEnabled] = useState(true)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!ruleName || !condition || !threshold) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Alert rule created",
      description: `${ruleName} has been added to your alert system.`,
    })

    // Reset form
    setRuleName("")
    setCondition("")
    setThreshold("")
    setSeverity("medium")
    setNotificationMethod("app")
    setDescription("")
    setIsEnabled(true)
    setOpen(false)
  }

  const getNotificationIcon = (method: string) => {
    switch (method) {
      case "app":
        return Bell
      case "email":
        return Mail
      case "sms":
        return Smartphone
      default:
        return Bell
    }
  }

  const NotificationIcon = getNotificationIcon(notificationMethod)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Alert Rule
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card border-0 max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Alert Rule</DialogTitle>
          <DialogDescription>
            Set up automated alerts for your crop monitoring system to stay informed about critical conditions.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ruleName">Rule Name *</Label>
              <Input
                id="ruleName"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                placeholder="e.g., Low Soil Moisture Alert"
                className="glass-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condition *</Label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger className="glass-input">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soil_moisture_low">Soil Moisture Below</SelectItem>
                  <SelectItem value="soil_moisture_high">Soil Moisture Above</SelectItem>
                  <SelectItem value="temperature_low">Temperature Below</SelectItem>
                  <SelectItem value="temperature_high">Temperature Above</SelectItem>
                  <SelectItem value="humidity_low">Humidity Below</SelectItem>
                  <SelectItem value="humidity_high">Humidity Above</SelectItem>
                  <SelectItem value="ph_low">pH Below</SelectItem>
                  <SelectItem value="ph_high">pH Above</SelectItem>
                  <SelectItem value="battery_low">Battery Below</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="threshold">Threshold Value *</Label>
              <Input
                id="threshold"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                placeholder="e.g., 30"
                className="glass-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="severity">Severity Level</Label>
              <Select value={severity} onValueChange={setSeverity}>
                <SelectTrigger className="glass-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notificationMethod">Notification Method</Label>
            <Select value={notificationMethod} onValueChange={setNotificationMethod}>
              <SelectTrigger className="glass-input">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="app">
                  <div className="flex items-center">
                    <Bell className="w-4 h-4 mr-2" />
                    In-App Notification
                  </div>
                </SelectItem>
                <SelectItem value="email">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </div>
                </SelectItem>
                <SelectItem value="sms">
                  <div className="flex items-center">
                    <Smartphone className="w-4 h-4 mr-2" />
                    SMS
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add additional details about this alert rule..."
              className="glass-input min-h-[80px]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="enabled" checked={isEnabled} onCheckedChange={setIsEnabled} />
              <Label htmlFor="enabled">Enable this rule</Label>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <NotificationIcon className="w-4 h-4" />
              <span>Notifications via {notificationMethod}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="glass-button">
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
              Create Alert Rule
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
