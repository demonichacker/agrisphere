"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { WeatherWidget } from "@/components/dashboard/weather-widget"
import { SensorMap } from "@/components/dashboard/sensor-map"
import { RecentAlerts } from "@/components/dashboard/recent-alerts"
import { QuickStats } from "@/components/dashboard/quick-stats"

export default function DashboardPage() {

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your agricultural operations in real-time</p>
          </div>
          <WeatherWidget />
        </div>

        <QuickStats />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SensorMap />
          </div>
          <div>
            <RecentAlerts />
          </div>
        </div>

        <DashboardOverview />
      </div>
    </DashboardLayout>
  )
}
