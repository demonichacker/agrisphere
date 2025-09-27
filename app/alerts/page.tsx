import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AlertsOverview } from "@/components/alerts/alerts-overview"
import { AlertsList } from "@/components/alerts/alerts-list"
import { AlertsFilters } from "@/components/alerts/alerts-filters"
import { WeatherAlerts } from "@/components/alerts/weather-alerts"
import { CreateAlertRule } from "@/components/alerts/create-alert-rule"

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Alerts & Notifications</h1>
            <p className="text-muted-foreground">Monitor critical conditions and receive real-time notifications</p>
          </div>
          <CreateAlertRule />
        </div>

        <AlertsOverview />
        <AlertsFilters />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AlertsList />
          </div>
          <div>
            <WeatherAlerts />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
